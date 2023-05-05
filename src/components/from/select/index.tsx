import React, { ReactNode, useCallback } from "react";
import { CustomTagProps } from "rc-select/lib/BaseSelect";
import { Form, Select, Tag } from "antd";
import { Rule } from "rc-field-form/lib/interface";
export interface ItemSelect {
  label: string | number;
  value: string | number;
  disabled?: boolean;
  color?: string;
}
interface ISelect {
  name: string;

  label?: string;

  onChange?: (data: any) => void;

  onSearch?: (data: string) => void;

  validate?: Rule[];

  wrapperCol?: object;

  // select
  mode?: "multiple" | "tags";

  placeholder?: string;

  allowClear?: boolean;

  autoClearSearchValue?: boolean;

  bordered?: boolean;

  clearIcon?: ReactNode;

  disabled?: boolean;

  popupClassName?: string;

  loading?: boolean;

  options?: ItemSelect[];

  className?: string;

  tagRender?: (props: CustomTagProps) => ReactNode;

  isColorItem?: boolean;

  size?: "large" | "middle" | "small";
  /**
   * Default: false
   * *remove margin for select
   */
  removeMargin?: boolean;
  defaultValue?: (string | number)[] | string | number | null;
}

export function FormSelect({
  label,
  name,
  onChange,
  onSearch,
  validate,
  wrapperCol,
  allowClear,
  autoClearSearchValue,
  bordered,
  clearIcon,
  disabled,
  popupClassName,
  loading,
  options,
  placeholder,
  mode,
  className,
  isColorItem = false,
  size,
  removeMargin,
  defaultValue,
}: ISelect) {
  const form = Form.useFormInstance();
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (Array.isArray(e)) {
        const value = e.find((item) => item === "all")
          ? (options || []).filter((i) => !i.disabled).map((item) => item.value)
          : e;
        form.setFieldValue(name, value);

        onChange && onChange(value);
      }

      onChange && onChange(e);
    },
    [form, name, onChange, options]
  );

  const handleSearchItem = useCallback(
    (value: string) => {
      onSearch && onSearch(value);
    },
    [onSearch]
  );

  const handleFilterOptions = useCallback(
    (inputValue: string, option: ItemSelect): boolean => {
      if (
        option.label
          .toString()
          .toLowerCase()
          .indexOf(inputValue.toLowerCase()) >= 0 ||
        +option.value === +inputValue
      )
        return true;
      return false;
    },
    []
  );

  const handleTagRender = useCallback(
    (props: CustomTagProps) => {
      const { label, value, closable, onClose } = props;
      const colorItem = (options || []).find(
        (item) => item.value === value
      )?.color;

      const onPreventMouseDown = (
        event: React.MouseEvent<HTMLButtonElement>
      ) => {
        event.preventDefault();
        event.stopPropagation();
      };

      return (
        <Tag
          color={colorItem || undefined}
          onMouseDown={onPreventMouseDown}
          closable={closable}
          onClose={onClose}
          style={{
            marginRight: 3,
          }}
        >
          {label}
        </Tag>
      );
    },
    [options]
  );

  return (
    <Form.Item
      label={label}
      name={name}
      rules={validate}
      wrapperCol={wrapperCol}
      colon={false}
      style={removeMargin ? { marginBottom: 0 } : {}}
    >
      <Select
        defaultValue={defaultValue as any}
        mode={mode}
        placeholder={placeholder}
        allowClear={allowClear}
        autoClearSearchValue={autoClearSearchValue}
        bordered={bordered}
        clearIcon={clearIcon}
        disabled={disabled}
        popupClassName={popupClassName}
        loading={loading}
        options={
          mode === "multiple" && options
            ? [{ label: "Chọn tất cả", value: "all" }, ...options]
            : options
        }
        onChange={handleChange}
        onSearch={handleSearchItem}
        filterOption={handleFilterOptions as any}
        className={className}
        tagRender={isColorItem ? handleTagRender : undefined}
        size={size}
        dropdownStyle={{ backgroundColor: "red" }}
      />
    </Form.Item>
  );
}
