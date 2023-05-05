import classNames from "classnames/bind";
import styles from "./Toast.module.scss";
import { notification } from "antd";
import { ReactNode } from "react";

const x = classNames.bind(styles);

export interface IShowToast {
  duration?: number;
  title: string;
  description?: string | ReactNode;
  type?: "success" | "error" | "info" | "warning";
}

export const showToast = (data: IShowToast) => {
  const listTypeToast = {
    success: notification.success,
    error: notification.error,
    info: notification.info,
    warning: notification.warning,
  };
  listTypeToast[data.type || "success"]({
    message: data.title,
    description: data.description,
    duration: data.duration || 2.5,
    className: x("toast-wrapper"),
    placement: "top",
  });
};
