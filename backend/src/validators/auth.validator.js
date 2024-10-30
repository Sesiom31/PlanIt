import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3, "El username debe tener al menos 3 caracteres"),
  email: z.string().email("El email debe ser un email válido"),
  password: z.string().min(6, "El password debe tener al menos 6 caracteres"),
  role: z.string().min(4, "El rol debe tener al menos 4 caracteres"),
});

export const loginSchema = z.object({
  inputData: z.union([
    z.string().min(3, "El username debe tener al menos 3 caracteres"),
    z.string().email("El email debe ser un email válido"),
  ]),
  password: z.string().min(6, "El password debe tener al menos 6 caracteres"),
});
