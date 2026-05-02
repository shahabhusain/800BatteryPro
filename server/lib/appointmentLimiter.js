import rateLimit from 'express-rate-limit';

export const appointmentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Increased to 100 requests per 15 minutes for testing
  message: {
    success: false,
    message: "Too many appointment requests from this IP, please try again after 15 minutes"
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true, // Don't count successful requests toward the limit
});