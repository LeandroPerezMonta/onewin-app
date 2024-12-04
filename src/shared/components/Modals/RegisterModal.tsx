import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from "@nextui-org/react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { BsFlagFill } from "react-icons/bs";
import { FaGift } from "react-icons/fa";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { RegisterValidationSchema } from "@/src/schemas/authSchemas";
import { RegisterForm } from "@/src/interfaces/auth.interface";
import { LoginModalProps } from "./LoginModal";
import { BiUser } from "react-icons/bi";

const initialValues: RegisterForm = {
  username: "",  // Cambié 'user' por 'username'
  currency: "",
  email: "",
  phone: "",
  password: "",
  promoCode: "",
  termsAccepted: false,
};

export const RegisterModal = ({ isOpen, onClose, setActiveTab }: LoginModalProps) => {
  const formik = useFormik({
    initialValues,
    validationSchema: RegisterValidationSchema,
    onSubmit: (values) => {
      Cookies.set("registerCookie", JSON.stringify(values), { expires: 7, path: "/" });
      Cookies.set("loginCookie", JSON.stringify({ email: values.email, password: values.password, username: values.username }), { expires: 7, path: "/" });
      window.location.reload()
      onClose();
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formik;

  return (
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur" size="sm" placement="center">
      <ModalContent>
        <ModalHeader className="flex flex-col text-center">Creación de cuenta</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Select placeholder="Selecciona una moneda" className="w-full" aria-label="currency">
                <SelectItem key="COP">Peso colombiano (COP)</SelectItem>
              </Select>
              <div>
                <Input
                  aria-label="username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Nombre de Usuario"
                  startContent={<BiUser />}
                  type="text"
                  className="w-full"
                />
                {errors.username && touched.username && <div className="text-red-500 text-sm">{errors.username}</div>}
              </div>
              <div>
                <Input
                  aria-label="Phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Número de teléfono"
                  startContent={<BsFlagFill className="text-red-500" />}
                  type="tel"
                  className="w-full"
                />
                {errors.phone && touched.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
              </div>
              <div>
                <Input
                  aria-label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Correo electrónico"
                  startContent={<AiOutlineMail />}
                  type="email"
                  className="w-full"
                />
                {errors.email && touched.email && <div className="text-red-500 text-sm">{errors.email}</div>}
              </div>
              <div>
                <Input
                  aria-label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Contraseña"
                  startContent={<AiOutlineLock />}
                  type="password"
                  className="w-full"
                />
                {errors.password && touched.password && <div className="text-red-500 text-sm">{errors.password}</div>}
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  aria-label="PromoCode"
                  name="promoCode"
                  value={values.promoCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  startContent={<FaGift className="text-red-500" />}
                  placeholder="Código promocional (opcional)"
                  className="w-full"
                />
                {errors.promoCode && touched.promoCode && <div className="text-red-500 text-sm">{errors.promoCode}</div>}
              </div>
              <div>
                <Checkbox
                  aria-label="TermsAccepted"
                  name="termsAccepted"
                  checked={values.termsAccepted}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  color="success"
                  size="sm"
                >
                  Estoy familiarizado y de acuerdo con las{" "}
                  <a href="#" className="text-blue-500 underline">
                    condiciones del acuerdo de uso del sitio
                  </a>
                </Checkbox>
                {errors.termsAccepted && touched.termsAccepted && <div className="text-red-500 text-sm">{errors.termsAccepted}</div>}
              </div>
              <div className="text-center justify-center space-x-2 flex w-full">
                <p className=" text-sm mt-2 cursor-pointer">
                  ¿Ya tienes una cuenta?
                </p>
                <p className=" text-sm mt-2 cursor-pointer ">
                  <a onClick={() => setActiveTab('login')} className="text-blue-500 hover:underline">
                    Iniciar sesión
                  </a>
                </p>
              </div>
            </div>
            <ModalFooter>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold" type="submit">
                Crear cuenta
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
