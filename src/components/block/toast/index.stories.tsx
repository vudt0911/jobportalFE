import { showToast } from "./index";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "components/showToast",
  component: showToast,
};

export default meta;

export const Primary: StoryObj<typeof showToast> = {
  args: {
    title: "title sample",
    description: "description sample",
    type: "success",
    duration: 2000,
  },
};
