const { z } = require('zod');

const registerSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8),
  gender: z.enum(['male', 'female'])
});

const deleteUserSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8),
});

const PostSchema = z.object({
  username: z.string().min(3).max(20),
  title : z.string().min(5).max(30),
  message : z.string().min(10).max(100),
})

module.exports = {
  registerSchema,
  deleteUserSchema,
  PostSchema,
  
};