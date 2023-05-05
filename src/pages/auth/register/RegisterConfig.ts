import { ValidateSchema } from "@/types/validate";
import { FormInstance } from "rc-field-form";
import { useTranslation } from "react-i18next";
export interface IFormRegister {
  email: string;
  confirmPassword: string;
  password: string;
  username: string;
  date: string;
  gender: number;
  checkbox: boolean;
}

export const validateSchema = (): ValidateSchema<IFormRegister> => {
  const { t } = useTranslation();
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
    confirmPassword: [
      { required: true, message: "Password is required" },
      {
        pattern:
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        message: t("authentication.1"),
      },
      ({ getFieldValue }: FormInstance) => ({
        validator(_, value: string) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error("The two password that you entered do not match!")
          );
        },
      }),
    ],
    username: [
      { required: true, message: "Username is required" },
      {
        min: 4,
        message: "Profile name should be more than 4 character",
      },
      {
        max: 20,
        message: "Profile name should be less than 20 character",
      },
    ],
    gender: [{ required: true, message: "Gender is required" }],
  };
};

export const initialValues = (): IFormRegister => {
  return {
    email: "",
    confirmPassword: "",
    password: "",
    username: "",
    gender: 1,
    date: "",
    checkbox: false,
  };
};
