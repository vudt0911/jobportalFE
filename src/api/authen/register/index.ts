import { request } from "@/services/api.service";
import { IUserRegister } from "@/types/user";

export const RegisterApi = (body: IUserRegister): Promise<void> => {
  return request({
    body,
    method: "POST",
    url: "/api/user/register",
  });
};
