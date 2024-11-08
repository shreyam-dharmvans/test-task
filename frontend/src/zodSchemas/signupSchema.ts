import { z } from "zod";

export const signupSchema = z.object({
    username: z.string().min(1),
    email: z.string().email(),
})