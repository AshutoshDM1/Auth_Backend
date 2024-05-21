const { z } = require('zod');

const registerSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8),
  gender: z.enum(['male', 'female'])
});


module.exports = {
  registerSchema,
};