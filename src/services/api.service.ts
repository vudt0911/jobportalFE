import { API_URL } from "@/const";
import axios from "axios";
// import {
//   getLocalAccessToken,
//   getLocalRefreshToken,
//   updateLocalAccessToken,
// } from "./token.service";
interface Option {
  url: string;
  /**
   * Default: GET
   */
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body: any;
}

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.request.use(
//   (config) => {
//     // const token = getLocalAccessToken();
//     if (token) {
//       // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
//       config.headers["x-access-token"] = token; // for Node.js Express back-end
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
instance.interceptors.response.use(
  (res) => res.data,
  async (err) => {
    /* Checking if the error is 401 and if the url is not login. If it is not login, it will try to
   refresh the token. */
    const originalConfig = err.config;
    if (originalConfig.url !== "api/user/login" && err.response) {
      // Access Token was expired
      // if (err.response.status === 401 && !originalConfig._retry) {
      //   originalConfig._retry = true;
      //   try {
      //     const rs = await instance.post("/api/user/refreshToken", {
      //       refreshToken: getLocalRefreshToken(),
      //     });
      //     const { accessToken } = rs.data;
      //     updateLocalAccessToken(accessToken);
      //     return instance(originalConfig);
      //   } catch (_error) {
      //     return Promise.reject(_error);
      //   }
      // }
    }
    // showToast({
    //   title:
    //     err.response?.data?.msg ||
    //     err.response?.data?.message ||
    //     "ERROR_NETWORK_CONNECTION",
    //   type: "error",
    // });
    return Promise.reject(err);
  }
);
export const request = (option: Option): Promise<any> => {
  switch (option.method) {
    case "GET":
      return instance.get(option.url);
    case "POST":
      return instance.post(option.url, option.body);
    case "PUT":
      return instance.put(option.url, option.body);
    case "PATCH":
      return instance.patch(option.url, option.body);
    case "DELETE":
      return instance.delete(option.url);
    default:
      return instance.get(option.url);
  }
};
