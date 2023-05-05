import Button from "@/components/from/button";
import classNames from "classnames/bind";
import dayjs from "dayjs";
import Loading from "@/components/block/loading";
import React, { useState } from "react";
import styles from "./Register.module.scss";
import { AxiosError } from "axios";
import { Checkbox, Col, DatePicker, DatePickerProps, Form, Space } from "antd";
import { FormInput } from "@/components/from/input";
import { FormSelect, ItemSelect } from "@/components/from/select";
import { handleErrorConfig } from "@/utils/handleError";
import { IFormRegister, initialValues, validateSchema } from "./registerConfig";
import { Link, useNavigate } from "react-router-dom";
import { RegisterApi } from "@/api/authen/register";
import { showToast } from "@/components/block/toast";
const c = classNames.bind(styles);
export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const onFinish = async (values: IFormRegister) => {
    const formatDate = dayjs(values.date).format("YYYY/MM/DD");
    try {
      setIsLoading(true);
      await RegisterApi({
        email: values.email,
        password: values.password,
        username: values.username,
        gender: `${values.gender}`,
        dateOfBirth: formatDate,
      });
      showToast({
        title: "Register Successfully",
      });
      navigate("/login");
      setIsLoading(false);
    } catch (err: unknown | AxiosError) {
      handleErrorConfig(err);
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading />;
  return (
    <div className={c("register-content")}>
      <div className={c("register-wrapper")}>
        <div className={c("title")}>Sign up</div>
        <Form
          name="basic"
          initialValues={initialValues()}
          onFinish={onFinish}
          autoComplete="on"
          layout="vertical"
        >
          <Col lg={{ span: 24, offset: 0 }}>
            <FormInput
              name="email"
              label="What is your email"
              type="text"
              placeholder="Enter your email"
              size="large"
              rules={validateSchema().email}
            />
          </Col>

          <Col lg={{ span: 24, offset: 0 }}>
            <FormInput
              label="Create a password"
              name="password"
              type="password"
              placeholder="Enter your password"
              size="large"
              rules={validateSchema().password}
            />
          </Col>
          <Col lg={{ span: 24, offset: 0 }}>
            <FormInput
              label="Confirm your password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password!"
              size="large"
              hasFeedback
              rules={validateSchema().confirmPassword}
            />
          </Col>
          <Col lg={{ span: 24, offset: 0 }}>
            <FormInput
              label="What should we call you"
              name="username"
              type="text"
              placeholder="Enter a profile name"
              size="large"
              rules={validateSchema().username}
            />
          </Col>
          <Form.Item name="date" label={"DatePicker"}>
            <DatePicker
              defaultValue={dayjs("YYYY/MM/DD")}
              format={"YYYY/MM/DD"}
              size="large"
            />
          </Form.Item>
          <Col lg={{ span: 24, offset: 0 }}>
            <FormSelect
              name="gender"
              label="What is your gender"
              placeholder="Select gender"
              allowClear
              options={[
                { label: "Nam", value: 1 },
                { label: "Nữ", value: 2 },
                { label: "Khác", value: 3 },
              ]}
              size="large"
              validate={validateSchema().gender}
            />
          </Col>
          <Form.Item valuePropName="checked" noStyle name="checkbox">
            <Checkbox>
              I would prefer not to receive marketing messages from website
            </Checkbox>
          </Form.Item>
          <div className={c("button")}>
            <Button size="small" isWidthInherit>
              Register
            </Button>
          </div>
        </Form>

        <Space>
          Have an account
          <Link to={"/login"} className={c("login")}>
            Login?
          </Link>
        </Space>
      </div>
    </div>
  );
}
