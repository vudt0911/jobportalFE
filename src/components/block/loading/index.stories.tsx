import Loading from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Loading> = {
  title: "components/Loading",
  component: Loading,
};

export default meta;

export const Primary: StoryObj<typeof Loading> = {};
