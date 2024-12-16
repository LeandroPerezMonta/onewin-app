export interface LoginForm {
  emailOrPhone: string;
  password: string;
}

export interface RegisterForm {
  user: string;
  phone: string; 
  email: string; 
  password: string; 
  codigo?: string;
  termsAccepted: boolean;
}
