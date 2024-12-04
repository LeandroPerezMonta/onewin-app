import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
  emailOrPhone: Yup.string()
    .required('El correo electrónico o teléfono es obligatorio')
    .test(
      'is-valid-email-or-phone',
      'Debe ser un correo electrónico o un número de teléfono válido',
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;
        return emailRegex.test(value || '') || phoneRegex.test(value || '');
      }
    ),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});


export const registerValidationSchema = Yup.object({
  currency: Yup.string().required('La moneda es obligatoria'),
  phone: Yup.string()
    .required('El número de teléfono es obligatorio')
    .matches(/^[0-9]{10,15}$/, 'El número de teléfono debe tener entre 10 y 15 dígitos'),
  email: Yup.string()
    .required('El correo electrónico es obligatorio')
    .email('Debe ser un correo electrónico válido'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  promoCode: Yup.string(),
  termsAccepted: Yup.bool().oneOf([true], 'Debes aceptar los términos y condiciones'),
});