import { z } from "zod";

export const signUpFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters long" }),
  email: z.email({ message: "Invalid email address" }),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export const signInFormSchema = signUpFormSchema.omit({
  fullName: true,
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
