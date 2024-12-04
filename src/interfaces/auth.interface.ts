export interface LoginForm {
  emailOrPhone: string;
  password: string;
}

export interface RegisterForm {
  username: string;
  phone: string; 
  email: string; 
  password: string; 
  promoCode?: string;
  termsAccepted: boolean;
}
