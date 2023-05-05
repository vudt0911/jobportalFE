import { ValidateSchema } from "@/types/validate";
import { t } from "i18next";
export interface IFormLogin {
  email: string;
  password: string;
  remember: boolean;
}

export const validateSchema = (): ValidateSchema<IFormLogin> => {
  return {
    email: [
      { required: true, message: "Email is required" },
      {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address!",
      },
    ],
    password: [
      { required: true, message: "Password is required" },
      {
        pattern:
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        message: t("authentication.1"),
      },
    ],
  };
};

export const initialValues = (): IFormLogin => {
  return {
    email: "",
    password: "",
    remember: false,
  };
};
