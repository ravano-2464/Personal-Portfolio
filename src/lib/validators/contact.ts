import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name.").max(80),
  email: z.string().email("Please enter a valid email address.").max(120),
  message: z.string().min(10, "Message is too short.").max(1200),
});

export type ContactPayload = z.infer<typeof contactSchema>;
