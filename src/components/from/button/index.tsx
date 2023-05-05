import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames/bind";

const c = classNames.bind(styles);
interface IButton {
  label?: string;
  size?: "small" | "medium" | "large";
  isWidthInherit?: boolean;
  type?: "button" | "reset" | "submit";
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
function Button({
  label = "",
  size,
  isWidthInherit = false,
  children,
  disabled,
  type = "submit",
  onClick,
}: IButton) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={c("button", size, isWidthInherit && "width-inherit")}
      type={type}
    >
      {children || label}
    </button>
  );
}

export default Button;
