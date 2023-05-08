import { ILoginResponse } from "@/types/user";

const getUserInLocalStorage = localStorage.getItem("user") || '""';
const getLocalRefreshToken = () => {
  const user = JSON.parse(getUserInLocalStorage);
  return user?.refreshToken;
};

const getLocalAccessToken = (): string | "" => {
  const user = JSON.parse(getUserInLocalStorage);
  return user?.token;
};

const updateLocalAccessToken = (token: string) => {
  const user = JSON.parse(getUserInLocalStorage);
  user.token = token;
  localStorage.setItem("user", JSON.stringify(user));
};

const getUserAccessToken = (): ILoginResponse | null => {
  return JSON.parse(getUserInLocalStorage) === ""
    ? null
    : JSON.parse(getUserInLocalStorage);
};

const setUserAccessToken = (user: ILoginResponse) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const removeUserAccessToken = () => {
  localStorage.removeItem("user");
};

export {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUserAccessToken,
  setUserAccessToken,
  removeUserAccessToken,
};
