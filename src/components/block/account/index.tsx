import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./Account.module.scss";
// eslint-disable-next-line import/named
import {
  CaretDownOutlined,
  CaretUpOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";
// eslint-disable-next-line import/named
import { ItemType } from "antd/es/menu/hooks/useItems";

const c = classNames.bind(styles);
interface IAccountProps {
  userName: string;
  renderDropdownItems?: ItemType[];
}
export default function Account({
  userName,
  renderDropdownItems,
}: IAccountProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRender = (menu: React.ReactNode) => (
    <div
      style={{
        maxWidth: "350px",
        minWidth: "205px",
        marginTop: "10px",
        borderRadius: "2px",
        backgroundColor: "#282828",
      }}
    >
      {React.cloneElement(menu as React.ReactElement, {
        style: {
          backgroundColor: "#282828",
          padding: 0,
        },
      })}
    </div>
  );
  return (
    <Dropdown
      trigger={["click"]}
      menu={{ items: renderDropdownItems }}
      onOpenChange={(open: boolean) => setIsOpen(open)}
      placement="topRight"
      dropdownRender={dropdownRender}
    >
      <button className={c("account")}>
        <button className={c("avatar")}>
          <UserOutlined className={c("icon")} style={{ fontSize: "22px" }} />
        </button>
        <span className={c("name")}>{userName}</span>
        {isOpen ? (
          <CaretUpOutlined className={c("icon")} />
        ) : (
          <CaretDownOutlined className={c("icon")} />
        )}
      </button>
    </Dropdown>
  );
}
