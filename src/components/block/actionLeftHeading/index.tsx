import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Space } from "antd";
import styles from "./ActionLeftHeading.module.scss";
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
import Tooltip from "@/components/block/tooltip";
const c = classNames.bind(styles);

interface IActionLeftHeadingProps {
  isBack: boolean;
  isContinue: boolean;
  onContinue?: () => void;
  onBack?: () => void;
}
function ActionLeftHeading({
  isBack,
  isContinue,
  onBack,
  onContinue,
}: IActionLeftHeadingProps) {
  const { t } = useTranslation();
  return (
    <Space>
      <Tooltip
        title={
          isBack ? (
            <span className={c("tooltip-text")}>{t("header.back")}</span>
          ) : undefined
        }
      >
        <button
          className={c("wrap-btn", !isBack && "disabled")}
          onClick={() => onBack && onBack()}
        >
          <MdOutlineArrowBackIos className={c("icon-btn")} />
        </button>
      </Tooltip>

      <Tooltip
        title={
          isContinue ? (
            <span className={c("tooltip-text")}>{t("header.continue")}</span>
          ) : undefined
        }
      >
        <button
          className={c("wrap-btn", !isContinue && "disabled")}
          onClick={() => onContinue && onContinue()}
        >
          <MdOutlineArrowForwardIos className={c("icon-btn")} />
        </button>
      </Tooltip>
    </Space>
  );
}

export default ActionLeftHeading;
