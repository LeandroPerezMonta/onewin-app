export interface LoginForm {
  emailOrPhone: string;
  password: string;
}

export interface RegisterForm {
  username: string; // Nombre de usuario
  currency: string; // Moneda seleccionada (ejemplo: "COP")
  phone: string; // Número de teléfono
  email: string; // Correo electrónico
  password: string; // Contraseña
  promoCode?: string; // Código promocional (opcional)
  termsAccepted: boolean; // Aceptación de términos y condiciones
}
