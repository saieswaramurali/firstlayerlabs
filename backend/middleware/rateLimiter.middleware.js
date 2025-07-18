import rateLimit from 'express-rate-limit';

export const RateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 30, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many attempts from this IP, please try again after 10 minutes.',
  },
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false,  // Disable `X-RateLimit-*` headers
});
