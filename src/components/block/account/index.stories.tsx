import Account from "./index";
import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { BiLinkExternal } from "react-icons/bi";
import { Divider, MenuProps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { removeUserAccessToken } from "@/services/token.service";
import { t } from "i18next";
import type { Meta, StoryObj } from "@storybook/react";
const c = classNames.bind(styles);

const meta: Meta<typeof Account> = {
  title: "components/Account",
  component: Account,
};

export default meta;
const navigate = useNavigate();
const renderDropdownItems: MenuProps["items"] = [
  {
    label: (
      <Link className={c("item-dropdown")} to="/account">
        {t("header.account")}
        <BiLinkExternal className={c("link-icon")} />
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link className={c("item-dropdown")} to="/profile">
        {t("header.profile")}
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link className={c("item-dropdown")} to="/upgrade">
        {t("header.upgradeToPremium")}
        <BiLinkExternal className={c("link-icon")} />
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link className={c("item-dropdown")} to="/setting">
        {t("header.setting")}
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <>
        <Divider
          style={{
            background: "#474343",
            margin: "0",
            height: "1px",
          }}
        />
        <button
          className={c("btn-logout")}
          type="button"
          onClick={() => {
            navigate("/login");
            removeUserAccessToken();
          }}
        >
          {t("header.logout")}
        </button>
      </>
    ),
    key: "4",
  },
];
export const Primary: StoryObj<typeof Account> = {
  args: {
    userName: "userName test",
    renderDropdownItems,
  },
};
