import React from "react";
import { Tooltip as TooltipAnt } from "antd";
interface ITooltipProps {
  children: React.ReactNode;
  color?: string;
  title: React.ReactNode | (() => React.ReactNode);
  placement?:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
  arrow?: boolean;
}
export default function Tooltip({
  children,
  color = "#282828",
  title,
  placement = "bottom",
  arrow = false,
}: ITooltipProps) {
  return (
    <TooltipAnt color={color} title={title} placement={placement} arrow={arrow}>
      {children}
    </TooltipAnt>
  );
}
