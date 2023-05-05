import { request } from "@/services/api.service";
import { ILoginResponse, IUserLogin } from "@/types/user";

export const LoginApi = (body: IUserLogin): Promise<ILoginResponse> => {
  return request({
    body,
    method: "POST",
    url: "/api/user/login",
  });
};
