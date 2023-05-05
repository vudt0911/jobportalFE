import { Rule } from "antd/lib/form";

export interface IFormLogin {
  username: string;
  password: string;
  gender: number | number[];
  phone_number: string;
}
export type ValidateSchema = { [key: string]: Rule[] };

export const validateSchema = (): ValidateSchema => {
  const validateSchema = {
    username: [{ required: true, message: "Username is required" }],
    password: [{ required: true, message: "password is required" }],
    gender: [{ required: true, message: "gender is required" }],
    phone_number: [{ required: true, message: "phone_number is required" }],
  };
  return validateSchema;
};

export const initialValues = (): IFormLogin => {
  const initialValues = {
    username: "dasdasds",
    password: "",
    phone_number: "01329031023",
    gender: [1, 2],
  };

  return initialValues;
};
