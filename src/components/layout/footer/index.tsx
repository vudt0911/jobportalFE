import React from "react";
import { Layout } from "antd";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
const c = classNames.bind(styles);

function Footer() {
  return (
    <Layout.Footer>
      <div className={c("footer-wrapper")}>Footer</div>
    </Layout.Footer>
  );
}

export default Footer;
