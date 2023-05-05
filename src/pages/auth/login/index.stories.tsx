import Login from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Login> = {
  title: "pages/Login",
  component: Login,
};

export default meta;

export const Primary: StoryObj<typeof Login> = {};
