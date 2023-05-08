import { request } from "@/services/api.service";
import { IUserInformation } from "@/types/user";

export const ProfileApi = (body: null): Promise<IUserInformation> => {
  return request({
    body,
    method: "GET",
    url: "/api/user/my_profile",
  });
};
