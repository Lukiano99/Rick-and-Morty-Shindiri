import * as z from "zod";

export type userAuthForm = z.infer<typeof userAuthSchema>;
export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
