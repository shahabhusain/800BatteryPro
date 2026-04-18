import prisma from "../lib/prisma.js";

export const createAppointment = async (req, res) => {
  try {
    const { name, email, phone, message, selectService } = req.body;

    // Create appointment without any validation
    const appointment = await prisma.appointment.create({
      data: {
        name: name || null,
        email: email || null,
        phone: phone || null,
        message: message || null,
        selectService: selectService || null
      }
    });

    // Return success response
    res.status(201).json({ 
      success: true,
      message: "Appointment booked successfully! Our sales team will contact you soon.",
      data: {
        id: appointment.id,
        name: appointment.name,
        email: appointment.email,
        selectService: appointment.selectService,
        phone: appointment.phone,
        createdAt: appointment.createdAt
      }
    });

  } catch (error) {
    console.error("Appointment creation error:", error);
    
    // Handle Prisma-specific errors
    if (error.code === 'P2002') {
      return res.status(409).json({ 
        success: false,
        message: "An appointment with this information already exists",
        error: "UNIQUE_CONSTRAINT_VIOLATION"
      });
    }
    
    if (error.code === 'P2025') {
      return res.status(404).json({ 
        success: false,
        message: "Resource not found",
        error: "NOT_FOUND"
      });
    }

    // Generic error response
    res.status(500).json({ 
      success: false,
      message: "Internal server error. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? error.message : "SERVER_ERROR"
    });
  }
};

export const getAllAppointment = async (req, res) => {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });

    res.json(appointments);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.appointment.delete({
      where: { id: Number(id) }
    });

    res.json({
      message: "Appointment deleted"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};