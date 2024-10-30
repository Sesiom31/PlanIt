import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "El username debe tener al menos 3 caracteres")
    .required("El nombre de usuario es obligatorio"),
  email: yup
    .string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  password: yup
    .string()
    .min(6, "El password debe tener al menos 6 caracteres")
    .required("El password es obligatorio"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Por favor, confirma tu contraseña"),
});
