import Loading from "@/components/block/loading";
import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { handleErrorConfig } from "@/utils/handleError";
import { showToast } from "@/components/block/toast";
import { ProfileApi } from "@/api/userInfor";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState({});
  const getToken = localStorage.getItem("user");

  useEffect( () => {
    if(!getToken){
      navigate("/login");
      return;
    }
    const profileUser = async () => {
      setIsLoading(true);
      try {
        const res = await ProfileApi(null);
        showToast({
          title: "Profile Successfully",
        });
        setUsers(res);
        setIsLoading(false);
      } catch (error: unknown | AxiosError) {
        handleErrorConfig(error);
        setIsLoading(false);
      }
    };
    profileUser();

  }, []);
  if (isLoading) return <Loading />;
  return (
      <h1>Profile user + {users.email} </h1>
  );
}
