const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be of 3 chars" })
    .max(255, { message: "Name must be not more than 255 characters" }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .min(3, { message: "email must be of 3 chars" })
    .max(255, { message: "email must be not more than 255 characters" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be of 10 chars" })
    .max(13, {
      message: "Phone must be not more than 13 characters including ",
    }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be of 3 chars" })
    .max(255, { message: "Password must be not more than 255 characters" }),
});

module.exports = signupSchema;
