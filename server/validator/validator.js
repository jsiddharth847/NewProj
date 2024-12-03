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

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .min(3, { message: "email must be of 3 chars" })
    .max(255, { message: "email must be not more than 255 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be of 3 chars" })
    .max(255, { message: "Password must be not more than 255 characters" }),
});

const contactUsSchema = z.object({
  Firstname: z
    .string({ required_error: "First Name is required" })
    .trim()
    .min(3, { message: "First Name must be of 3 chars" })
    .max(255, { message: "First Name must be not more than 255 characters" }),

  Lastname: z
    .string({ required_error: "Last Name is required" })
    .trim()
    .min(3, { message: "Last Name must be of 3 chars" })
    .max(255, { message: "Last Name must be not more than 255 characters" }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .min(3, { message: "email must be of 3 chars" })
    .max(255, { message: "email must be not more than 255 characters" }),

  Message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, { message: "Message must be of 10 chars" })
    .max(1000, {
      message: "Message must be not more than 1000 characters including ",
    }),
});

module.exports = { signupSchema, contactUsSchema, loginSchema };
