import ActionLeftHeading from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ActionLeftHeading> = {
  title: "components/ActionLeftHeading",
  component: ActionLeftHeading,
};

export default meta;

export const Primary: StoryObj<typeof ActionLeftHeading> = {
  args: {
    isBack: true,
    isContinue: true,
  },
};
