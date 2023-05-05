import Button from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: undefined,
    disabled: false,
    isWidthInherit: false,
    label: "Button sample",
    size: "medium",
    type: "submit",
  },
};
