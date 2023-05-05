import { showToast } from "@/components/block/toast";
import { AxiosError, isAxiosError } from "axios";

export const handleErrorConfig = (
  error: unknown | AxiosError,
  customMsgError?: string
) => {
  if (!!customMsgError) {
    return showToast({
      type: "error",
      title: customMsgError,
    });
  } else if (isAxiosError(error)) {
    return showToast({
      type: "error",
      title: error.response?.data?.msg || error.message,
    });
  } else if (error instanceof Error) {
    return showToast({
      type: "error",
      title: error.message,
    });
  } else {
    return showToast({
      type: "error",
      title: "Network connection error",
    });
  }
};
