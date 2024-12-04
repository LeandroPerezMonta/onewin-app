import { LoginForm } from "@/src/interfaces/auth.interface";
import { LoginValidationSchema } from "@/src/schemas/authSchemas";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useFormik } from "formik";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import {
  FaGoogle,
  FaVk,
  FaTelegram,
  FaYandex,
  FaOdnoklassniki,
  FaSteam,
} from "react-icons/fa";
import Cookies from "js-cookie";

export interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "login" | "register";
  setActiveTab: React.Dispatch<React.SetStateAction<"login" | "register">>;
}

const initialValues: LoginForm = {
  emailOrPhone: "",
  password: "",
};

export const LoginModal = ({
  isOpen,
  onClose,
  setActiveTab,
}: LoginModalProps) => {
  const formik = useFormik({
    initialValues,
    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      console.log("Datos del formulario:", values);

      // Verificar si existe la cookie de registro
      const registerCookie = Cookies.get("registerCookie");
      if (registerCookie) {
        const { email, password, username } = JSON.parse(registerCookie);
        if (email === values.emailOrPhone && password === values.password) {
          console.log("Login exitoso", { email, password, username });

          Cookies.set(
            "loginCookie",
            JSON.stringify({ email, password, username }),
            { expires: 7 }
          );
          window.location.reload();
        } else {
          console.log("Credenciales incorrectas");
        }
      } else {
        const loginCookie = Cookies.get("loginCookie");
        if (loginCookie) {
          const { email, password, username } = JSON.parse(loginCookie);
          if (email === values.emailOrPhone && password === values.password) {
            console.log("Login exitoso desde cookie", {
              email,
              password,
              username,
            });
          }
        }
      }
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      backdrop="blur"
      size="sm"
      placement="center"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col text-center">
          Iniciar sesión
        </ModalHeader>
        <ModalBody>
          <div className="flex justify-between mb-4">
            {[
              FaGoogle,
              FaVk,
              FaTelegram,
              FaYandex,
              FaOdnoklassniki,
              FaSteam,
            ].map((Icon, index) => (
              <Button
                key={index}
                isIconOnly
                className="bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-600"
              >
                <Icon size={24} />
              </Button>
            ))}
          </div>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-default-50 px-2 text-gray-500">o</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Input
                  aria-label="EmailOrPhone"
                  name="emailOrPhone"
                  value={values.emailOrPhone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Correo electrónico o teléfono"
                  startContent={<AiOutlineMail />}
                  type="text"
                  className="w-full"
                />
                {errors.emailOrPhone && touched.emailOrPhone && (
                  <div className="text-red-500 text-sm">
                    {errors.emailOrPhone}
                  </div>
                )}
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
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                )}
              </div>
              <p className="text-right text-sm mt-2 cursor-pointer">
                <a
                  onClick={() => setActiveTab("register")}
                  className="text-blue-500 hover:underline"
                >
                  Registrate
                </a>
              </p>
            </div>
            <ModalFooter>
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
                type="submit"
              >
                Iniciar sesión
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
