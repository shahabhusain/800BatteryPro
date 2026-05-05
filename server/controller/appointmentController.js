import prisma from "../lib/prisma.js";


export const createSecondAppointment = async (req, res) => {
  try {
    let { phoneNumber, location, selectService } = req.body;
    
    if (!phoneNumber || !location || !selectService) {
      return res.status(400).json({ 
        success: false,
        message: "All fields are required" 
      });
    }

    // Handle selectService as array (multiple services)
    let servicesArray = [];
    if (Array.isArray(selectService)) {
      servicesArray = selectService;
    } else if (typeof selectService === 'string') {
      servicesArray = [selectService];
    } else {
      return res.status(400).json({ 
        success: false,
        message: "Invalid service format" 
      });
    }

    // Validate that at least one service is selected
    if (servicesArray.length === 0) {
      return res.status(400).json({ 
        success: false,
        message: "At least one service must be selected" 
      });
    }

    // Service validation
    const validServices = ['Battery Replacement', 'Jump Start / Boost', '24/7 Roadside Assistance', 'Any Other'];
    const invalidServices = servicesArray.filter(service => !validServices.includes(service));
    if (invalidServices.length > 0) {
      return res.status(400).json({ 
        success: false,
        message: `Invalid service(s): ${invalidServices.join(', ')}` 
      });
    }

    // STRICT UAE PHONE NUMBER VALIDATION
    let cleanPhoneNumber = phoneNumber.toString().trim();
    cleanPhoneNumber = cleanPhoneNumber.replace(/[\s\-\(\)]/g, '');
    
    const validMobilePrefixes = ['50', '52', '54', '55', '56', '58'];
    const validLandlinePrefixes = ['2', '3', '4', '6', '7', '9'];
    
    let isValidUAE = false;
    let standardizedPhone = null;
    
    // Check format: +971XXXXXXXXX
    if (cleanPhoneNumber.startsWith('+971')) {
      const numberAfterCode = cleanPhoneNumber.slice(4);
      if (validMobilePrefixes.includes(numberAfterCode.slice(0, 2)) && numberAfterCode.length === 9) {
        isValidUAE = true;
        standardizedPhone = '0' + numberAfterCode;
      }
      else if (validLandlinePrefixes.includes(numberAfterCode.slice(0, 1)) && numberAfterCode.length === 8) {
        isValidUAE = true;
        standardizedPhone = '0' + numberAfterCode;
      }
    }
    // Check format: 971XXXXXXXXX
    else if (cleanPhoneNumber.startsWith('971')) {
      const numberAfterCode = cleanPhoneNumber.slice(3);
      if (validMobilePrefixes.includes(numberAfterCode.slice(0, 2)) && numberAfterCode.length === 9) {
        isValidUAE = true;
        standardizedPhone = '0' + numberAfterCode;
      }
      else if (validLandlinePrefixes.includes(numberAfterCode.slice(0, 1)) && numberAfterCode.length === 8) {
        isValidUAE = true;
        standardizedPhone = '0' + numberAfterCode;
      }
    }
    // Check format: 0XXXXXXXXX
    else if (cleanPhoneNumber.startsWith('0')) {
      const numberAfterZero = cleanPhoneNumber.slice(1);
      if (validMobilePrefixes.includes(numberAfterZero.slice(0, 2)) && numberAfterZero.length === 9) {
        isValidUAE = true;
        standardizedPhone = cleanPhoneNumber;
      }
      else if (validLandlinePrefixes.includes(numberAfterZero.slice(0, 1)) && numberAfterZero.length === 8) {
        isValidUAE = true;
        standardizedPhone = cleanPhoneNumber;
      }
    }
    // Check format: XXXXXXXX
    else if (/^\d+$/.test(cleanPhoneNumber)) {
      if (validMobilePrefixes.includes(cleanPhoneNumber.slice(0, 2)) && cleanPhoneNumber.length === 9) {
        isValidUAE = true;
        standardizedPhone = '0' + cleanPhoneNumber;
      }
      else if (validLandlinePrefixes.includes(cleanPhoneNumber.slice(0, 1)) && cleanPhoneNumber.length === 8) {
        isValidUAE = true;
        standardizedPhone = '0' + cleanPhoneNumber;
      }
    }
    
    if (!isValidUAE) {
      return res.status(400).json({ 
        success: false,
        message: "Only UAE phone numbers are accepted. Valid formats: 05XXXXXXXX, 04XXXXXXX, +9715XXXXXXXX, +9714XXXXXXX"
      });
    }

    // Location validation
    const validLocations = ['dubai', 'abu-dhabi'];
    const cleanLocation = location.trim().toLowerCase();
    
    if (!validLocations.includes(cleanLocation)) {
      return res.status(400).json({ 
        success: false,
        message: "Please select a valid UAE location (Dubai or Abu Dhabi)" 
      });
    }

    // Check for recent duplicate submissions
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const recentDuplicate = await prisma.secondAppointment.findFirst({
      where: {
        phoneNumber: standardizedPhone,
        location: cleanLocation,
        selectService: {
          equals: servicesArray
        },
        createdAt: {
          gte: fiveMinutesAgo
        }
      }
    });

    if (recentDuplicate) {
      return res.status(429).json({
        success: false,
        message: "Please wait 5 minutes before submitting the same request"
      });
    }

    // Check for existing appointment
    const existingAppointment = await prisma.secondAppointment.findFirst({
      where: { phoneNumber: standardizedPhone }
    });

    if (existingAppointment) {
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      const recentUpdates = await prisma.secondAppointment.count({
        where: {
          phoneNumber: standardizedPhone,
          updatedAt: {
            gte: oneHourAgo
          }
        }
      });

      if (recentUpdates >= 3) {
        return res.status(429).json({
          success: false,
          message: "Too many update attempts. Please try again later"
        });
      }

      const hasChanges = existingAppointment.location !== cleanLocation || 
                        JSON.stringify(existingAppointment.selectService) !== JSON.stringify(servicesArray);
      
      if (!hasChanges) {
        return res.status(400).json({
          success: false,
          message: "No changes detected in your appointment"
        });
      }

      await prisma.secondAppointment.update({
        where: { id: existingAppointment.id },
        data: {
          location: cleanLocation,
          selectService: servicesArray,
          updatedAt: new Date()
        }
      });
      
      return res.status(200).json({
        success: true, 
        message: "Appointment updated successfully! Sales team will contact you soon!"
      });
    }

    // Check for many appointments from same phone number
    const totalAppointments = await prisma.secondAppointment.count({
      where: { phoneNumber: standardizedPhone }
    });

    if (totalAppointments >= 5) {
      return res.status(429).json({
        success: false,
        message: "Maximum appointment limit reached for this phone number"
      });
    }

    // Check for appointments in last 24 hours
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const todaysAppointments = await prisma.secondAppointment.count({
      where: {
        phoneNumber: standardizedPhone,
        createdAt: {
          gte: twentyFourHoursAgo
        }
      }
    });

    if (todaysAppointments >= 2) {
      return res.status(429).json({
        success: false,
        message: "Maximum 2 appointments allowed per day. Please try tomorrow"
      });
    }

    // Create new appointment
    await prisma.secondAppointment.create({
      data: {
        phoneNumber: standardizedPhone,
        location: cleanLocation,
        selectService: servicesArray
      }
    });

    return res.status(200).json({
      success: true, 
      message: "Appointment created successfully! Sales team will contact you soon!"
    });

  } catch (error) {
    console.error("Appointment creation error:", error);
    
    if (error.code === 'P2002') {
      return res.status(409).json({
        success: false,
        message: "An appointment with this phone number already exists!"
      });
    }
    
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later."
    });
  }
};

export const getAllSecondAppointment = async (req, res) => {
  try {
    const appointment = await prisma.secondAppointment.findMany({
      orderBy:{
        createdAt:"desc"
      }
    })
    res.json(appointment)
  } catch (error) {
    res.status(500).json({message:"server error",error})
  }
}

export const deleteSecondAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ 
        success: false,
        message: "Appointment ID is required" 
      });
    }
    const appointment = await prisma.secondAppointment.delete({
      where: { id: Number(id) }
    });
    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully.",
      data: appointment
    });
  } catch (error) {
    console.error("❌ Delete appointment error:", error);
    
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: "Appointment not found"
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Server error",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

