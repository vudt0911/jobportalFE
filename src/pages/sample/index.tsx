import Loading from "../../components/block/loading";
import ButtonBase from "../../components/from/button";
import React, { useState } from "react";
import { Button, Col, Form, Row, Space } from "antd";
import { FormInput } from "../../components/from/input";
import { FormSelect, ItemSelect } from "../../components/from/select";
import { IFormLogin, initialValues, validateSchema } from "./formConfig";
import { showToast } from "../../components/block/toast";
import { useTranslation } from "react-i18next";
import { LOCALE } from "../../const";
import ActionLeftHeading from "../../components/block/actionLeftHeading";

function PageExample() {
  const { t, i18n } = useTranslation();
  const languages = [
    {
      value: "vi",
      label: "VietNam",
    },
    {
      value: "en",
      label: "English",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (values: IFormLogin) => {
    console.log("values :>> ", values);
  };

  const MockDataOptions: ItemSelect[] = [
    { label: "Nam", value: 1, color: "lightblue" },
    { label: "Nữ", value: 2 },
    { label: "Khác", value: 3 },
  ];

  const handleChangeLanguage = (lang: string) => {
    localStorage.setItem(LOCALE, lang);
    i18n.changeLanguage(lang);
  };
  if (isLoading) return <Loading />;
  return (
    <>
      {/*<div className="form-wrapepr">*/}
      {/*  <Form*/}
      {/*    name="basic"*/}
      {/*    initialValues={initialValues()}*/}
      {/*    onFinish={onFinish}*/}
      {/*    autoComplete="off"*/}
      {/*  >*/}
      {/*    <Col lg={{ span: 21, offset: 1 }}>*/}
      {/*      <FormInput*/}
      {/*        name="username"*/}
      {/*        label="Họ và tên"*/}
      {/*        showCount*/}
      {/*        rules={validateSchema().username}*/}
      {/*      />*/}
      {/*    </Col>*/}

      {/*    <Col lg={{ span: 21, offset: 1 }}>*/}
      {/*      <FormInput*/}
      {/*        type="password"*/}
      {/*        name="pasword"*/}
      {/*        label="Mật khẩu"*/}
      {/*        rules={validateSchema().password}*/}
      {/*      />*/}
      {/*    </Col>*/}

      {/*    <Row>*/}
      {/*      <Col lg={{ span: 10, offset: 1 }}>*/}
      {/*        <FormSelect*/}
      {/*          name="gender"*/}
      {/*          mode="multiple"*/}
      {/*          placeholder="Giới tính"*/}
      {/*          label="Giới tính"*/}
      {/*          options={MockDataOptions}*/}
      {/*          allowClear*/}
      {/*          validate={validateSchema().phone_number}*/}
      {/*        />*/}
      {/*      </Col>*/}
      {/*      <Col lg={{ span: 10, offset: 1 }}>*/}
      {/*        <FormInput*/}
      {/*          name="phone_number"*/}
      {/*          label="Số điện thoại"*/}
      {/*          type="number"*/}
      {/*          rules={validateSchema().phone_number}*/}
      {/*        />*/}
      {/*      </Col>*/}
      {/*    </Row>*/}

      {/*    <Button htmlType="submit">Login</Button>*/}
      {/*  </Form>*/}
      {/*</div>*/}

      {/*<div*/}
      {/*  className="toast-sample"*/}
      {/*  style={{ display: "flex", marginTop: "40px" }}*/}
      {/*>*/}
      {/*  <div>*/}
      {/*    <Button*/}
      {/*      onClick={() =>*/}
      {/*        showToast({*/}
      {/*          title: "show toast success",*/}
      {/*          type: "success",*/}
      {/*        })*/}
      {/*      }*/}
      {/*    >*/}
      {/*      Show toast success*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <Button*/}
      {/*      onClick={() =>*/}
      {/*        showToast({*/}
      {/*          title: "show toast error",*/}
      {/*          type: "error",*/}
      {/*        })*/}
      {/*      }*/}
      {/*    >*/}
      {/*      Show toast error*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <Button*/}
      {/*      onClick={() =>*/}
      {/*        showToast({*/}
      {/*          title: "show toast info",*/}
      {/*          type: "info",*/}
      {/*        })*/}
      {/*      }*/}
      {/*    >*/}
      {/*      Show toast info*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <Button*/}
      {/*      onClick={() =>*/}
      {/*        showToast({*/}
      {/*          title: "show toast warning",*/}
      {/*          type: "warning",*/}
      {/*        })*/}
      {/*      }*/}
      {/*    >*/}
      {/*      Show toast warning*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div style={{ marginTop: "20px" }}>*/}
      {/*  <Button onClick={() => setIsLoading(true)}>Show loading</Button>*/}
      {/*</div>*/}

      {/*<div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>*/}
      {/*  <h3 style={{ marginRight: "20px" }}>{t("example.1")}</h3>*/}
      {/*  <FormSelect*/}
      {/*    placeholder="Select language"*/}
      {/*    name="select-multi-lang"*/}
      {/*    options={languages}*/}
      {/*    onChange={handleChangeLanguage}*/}
      {/*    removeMargin*/}
      {/*    defaultValue={localStorage.getItem(LOCALE)}*/}
      {/*  />*/}
      {/*</div>*/}

      {/*<Space>*/}
      {/*  <div style={{ width: "500px" }}>*/}
      {/*    <ButtonBase isWidthInherit>test button</ButtonBase>*/}
      {/*  </div>*/}
      {/*  <ButtonBase size="small">test button</ButtonBase>*/}
      {/*  <ButtonBase size="medium">test button</ButtonBase>*/}
      {/*  <ButtonBase size="large">test button</ButtonBase>*/}
      {/*  <ButtonBase disabled size="large">*/}
      {/*    test button*/}
      {/*  </ButtonBase>*/}
      {/*</Space>*/}

      {/*<Space>*/}
      {/*  123*/}
      {/*  <ActionLeftHeading isBack isContinue />*/}
      {/*</Space>*/}
    </>
  );
}
export default PageExample;
