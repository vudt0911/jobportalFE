import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import classNames from "classnames/bind";
import styles from "./Loading.module.scss";
const x = classNames.bind(styles);
export default function Loading() {
  return (
    <div className={x("loading-wrapper")}>
      <PropagateLoader color="#36d7b7" />
    </div>
  );
}
