// validation.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(3, "Password must be at least 6 characters long"),
});

export const registerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  age: z.number().min(0, "Age must be a positive number"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(3, "Password must be at least 6 characters long"),
  phone: z.string().min(1, "Phone number is required"),
});
