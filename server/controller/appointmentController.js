import prisma from "../lib/prisma.js";

export const createSecondAppointment = async (req, res) => {
  try {
    const { phoneNumber, location, selectService } = req.body;
    
    if (!phoneNumber || !location || !selectService) {
      return res.status(400).json({ message: "Invalid fields" });
    }

    // Changed from findUnique to findFirst since phoneNumber is not unique
    const existingAppointment = await prisma.secondAppointment.findFirst({
      where: { phoneNumber: phoneNumber }
    });

    if (existingAppointment) {
      // Update existing appointment
      const updatedAppointment = await prisma.secondAppointment.update({
        where: { id: existingAppointment.id }, // Use id instead of phoneNumber
        data: {
          location,
          selectService,
          updatedAt: new Date()
        }
      });
      
      return res.status(200).json({
        success: true, 
        message: "Appointment updated successfully! Sales team will contact you soon!"
      });
    }

    // Create new appointment if phone number doesn't exist
    const appointment = await prisma.secondAppointment.create({
      data: {
        phoneNumber,
        location,
        selectService
      }
    });

    res.status(200).json({
      success: true, 
      message: "Appointment created successfully and sales team will contact you soon!"
    });

  } catch (error) {
    console.error("Appointment creation error:", error);
    
    // Handle specific Prisma errors
    if (error.code === 'P2002') {
      return res.status(409).json({
        success: false,
        message: "An appointment with this phone number already exists!"
      });
    }
    
    return res.status(500).json({
      success: false,
      message: "Internal server error"
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

