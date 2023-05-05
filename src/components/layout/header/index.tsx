import Account from "@/components/block/account";
import ActionLeftHeading from "@/components/block/actionLeftHeading";
import classNames from "classnames/bind";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import Tooltip from "@/components/block/tooltip";
import { BiLinkExternal } from "react-icons/bi";
import { Col, Divider, Layout, MenuProps, Row, Select, Space } from "antd";
import { getCurrentLanguage } from "@/utils/getCurrentLanguage";
import { Languages, LanguagesType } from "@/types/language";
import { Link, useNavigate } from "react-router-dom";
import { LOCALE } from "@/const";
import { useScrollHeight } from "@/hooks/useScrollHeight";
import { useTranslation } from "react-i18next";
import { removeUserAccessToken } from "@/services/token.service";
import useAuth from "@/hooks/useAuth";

const c = classNames.bind(styles);

function Header() {
  const { t, i18n } = useTranslation();
  const scrollHeight = useScrollHeight();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [language, setLanguage] = useState<Languages>(getCurrentLanguage());
  const onChangeLanguage = (lang: Languages) => {
    setLanguage(lang);
    localStorage.setItem(LOCALE, lang);
    i18n.changeLanguage(lang);
  };
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
  return (
    <Layout.Header className={c("header")}>
      <div
        className={c("header-wrapper", scrollHeight > 100 && "header-scroll")}
      >
        <Row justify={"space-between"} align={"bottom"}>
          <Col span={10} style={{ textAlign: "start" }} offset={1}>
            <ActionLeftHeading isContinue isBack={false} />
          </Col>
          <Col span={13}>
            <Space wrap size={20}>
              <div className={c("language-wrapper")}>
                <Select
                  value={language}
                  onChange={onChangeLanguage}
                  className={c("language")}
                  options={[
                    { value: LanguagesType.VIETNAMESE, label: "Tiếng Việt" },
                    { value: LanguagesType.ENGLISH, label: "English" },
                  ]}
                />
              </div>
              <Tooltip title={t("header.upgradeToPremium")}>
                <div className={c("upgrade")}>
                  <button>{t("header.upgrade")}</button>
                </div>
              </Tooltip>
              <Account
                userName={auth?.username ?? ""}
                renderDropdownItems={renderDropdownItems}
              />
            </Space>
          </Col>
        </Row>
      </div>
    </Layout.Header>
  );
}

export default Header;
