import Button from "@/components/from/button";
import classNames from "classnames/bind";
import Loading from "@/components/block/loading";
import styles from "./Login.module.scss";
import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import { AxiosError } from "axios";
import { Checkbox, Col, Form, Row, Space } from "antd";
import { FormInput } from "@/components/from/input";
import { handleErrorConfig } from "@/utils/handleError";
import { IFormLogin, initialValues, validateSchema } from "./loginConfig";
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "@/api/authen/login";
import { setUserAccessToken } from "@/services/token.service";
import { showToast } from "@/components/block/toast";
const c = classNames.bind(styles);
export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const onFinish = async (values: IFormLogin) => {
    setIsLoading(true);
    try {
      const res = await LoginApi({
        email: values.email,
        password: values.password,
      });
      showToast({
        title: "Login Successfully",
      });
      navigate("/home");
      setIsLoading(false);
      setUserAccessToken(res);
      setAuth(res);
      // window.location.reload();
    } catch (error: unknown | AxiosError) {
      handleErrorConfig(error);
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading />;
  return (
    <div className={c("login-content")}>
      <div className={c("login-wrapper")}>
        <div className={c("title")}>Login to your account</div>
        <div className={c("form")}>
          <Form
            name="login"
            initialValues={initialValues()}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Col lg={{ span: 24, offset: 0 }}>
              <FormInput
                name="email"
                type="text"
                placeholder="Enter Email"
                size="large"
                rules={validateSchema().email}
              />
            </Col>
            <Col lg={{ span: 24, offset: 0 }}>
              <FormInput
                name="password"
                type="password"
                placeholder="Enter Password"
                size="large"
                rules={validateSchema().password}
              />
            </Col>
            <Row>
              <Col lg={{ span: 18 }}>
                <Form.Item valuePropName="checked" noStyle name="remember">
                  <Checkbox>Keep me signed in</Checkbox>
                </Form.Item>
              </Col>
              <Col lg={{ span: 6 }}>
                <Link to={"forgot-password"}>Forgot password?</Link>
              </Col>
            </Row>
            <br />

            <div className={c("button")}>
              <Button isWidthInherit size="small">
                Login
              </Button>
            </div>
          </Form>
          <br />
          <Row>
            <Col lg={{ span: 13 }}></Col>
            <Col lg={{ span: 11 }}>
              <Space>
                <span>Bạn chưa có tài khoản?</span>
                <Link to="/register">Đăng ký</Link>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
