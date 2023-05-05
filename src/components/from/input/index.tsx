import React, { ReactNode, useCallback } from "react";
import { Form, Input } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";

import { Rule } from "rc-field-form/lib/interface";

interface IInput {
  /**
   * Default: 'text'
   */
  type?: "text" | "number" | "email" | "password";

  name: string;
  /**
   * Default: 'text'
   */
  size?: SizeType;

  label?: string;

  placeholder?: string;

  className?: string;

  id?: string;

  isAllowOnlyNumber?: boolean;

  showCount?:
    | boolean
    | {
        formatter: (info: {
          value: string;
          count: number;
          maxLength?: number;
        }) => ReactNode;
      };

  status?: "error" | "warning";

  suffix?: ReactNode;

  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;

  rules?: Rule[];

  wrapperCol?: object;
  /**
   * Default: false
   */
  disabled?: boolean;
  /**
   * Default: false
   */
  hasFeedback?: boolean;
  /**
   * Default: false
   * *remove margin for input
   */
  removeMargin?: boolean;
}

export function FormInput({
  label,
  name,
  type,
  placeholder,
  disabled = false,
  hasFeedback = false,
  showCount,
  status,
  suffix,
  onChange,
  rules,
  wrapperCol,
  size,
  className,
  removeMargin,
}: IInput) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
    },
    [onChange]
  );

  return (
    <Form.Item
      label={label}
      name={name}
      rules={rules}
      hasFeedback={hasFeedback}
      wrapperCol={wrapperCol}
      colon={false}
      style={removeMargin ? { marginBottom: 0 } : {}}
    >
      {type !== "password" ? (
        <Input
          className={className}
          type={type}
          placeholder={placeholder}
          showCount={showCount}
          status={status}
          suffix={suffix}
          onChange={handleChange}
          size={size}
          disabled={disabled}
        />
      ) : (
        <Input.Password
          className={className}
          placeholder={placeholder}
          onChange={handleChange}
          size={size}
          disabled={disabled}
        />
      )}
    </Form.Item>
  );
}
