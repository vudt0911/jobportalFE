import React, { createContext, useEffect, useState } from "react";
import { ILoginResponse } from "@/types/user";
export interface IAuthContext {
  auth: ILoginResponse | null;
  setAuth: (auth: ILoginResponse) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [auth, setAuth] = useState<ILoginResponse | null>(null);
  useEffect(() => {
    const useInLocalStorage = localStorage.getItem("user");
    if (!useInLocalStorage) return;
    const userInfo = JSON.parse(useInLocalStorage);
    setAuth(userInfo);
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
