import classNames from "classnames/bind";
import React from "react";
import Sider from "antd/es/layout/Sider";
import styles from "./Sidebar.module.scss";
import { LIST_ITEM_SIDEBAR } from "../../../const";
import { Menu } from "antd";

// import Logo from "../../../assets/img/logo.svg";

const c = classNames.bind(styles);
function Sidebar() {
  return (
    <Sider className={c("sider-wrapper")} theme="dark">
      <div className={c("logo")}>{/* <img src={Logo} alt="LOGO" /> */}</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        className={c("sider-menu")}
        items={LIST_ITEM_SIDEBAR}
      />
    </Sider>
  );
}

export default Sidebar;
