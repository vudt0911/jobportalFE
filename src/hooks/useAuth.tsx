import AuthContext, { IAuthContext } from "@/context/authProvider";
import { useContext } from "react";

const useAuth = () => {
  return useContext(AuthContext as React.Context<IAuthContext>);
};

export default useAuth;
