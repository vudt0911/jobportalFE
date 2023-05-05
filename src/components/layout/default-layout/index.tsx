import classNames from "classnames/bind";
import Footer from "../footer";
import Header from "../header";
import React from "react";
import Sidebar from "../sidebar";
import styles from "./Default-layout.module.scss";
import { Content } from "antd/lib/layout/layout";
import { Layout } from "antd";
const cx = classNames.bind(styles);

function DefaultLayout({
  children,
}: {
  children: JSX.Element | React.ReactNode;
}) {
  return (
    <div className={cx("wrapper")}>
      <Layout>
        <Sidebar></Sidebar>
        <Layout>
          <Header />
          <Content className={cx("content")}>{children}</Content>
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
}

export default DefaultLayout;
