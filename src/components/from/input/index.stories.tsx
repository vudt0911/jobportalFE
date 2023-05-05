import { FormInput } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormInput> = {
  title: "components/FormInput",
  component: FormInput,
};

export default meta;

export const Primary: StoryObj<typeof FormInput> = {
  args: {
    className: "className sample",
    disabled: false,
    hasFeedback: true,
    isAllowOnlyNumber: false,
    label: "input sample",
    placeholder: "placeholder sample",
    removeMargin: false,
    name: "name sample",
    showCount: true,
    size: "middle",
    status: "error",
    suffix: <h2>suffix</h2>,
    type: "text",
    wrapperCol: {},
  },
};
