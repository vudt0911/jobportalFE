import Tooltip from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "components/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ display: "inline-block" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<typeof Tooltip> = {
  args: {
    children: <h3>tooltip label</h3>,
    color: "#282828",
    title: <span>tooltip content</span>,
    placement: "bottom",
    arrow: false,
  },
  argTypes: {
    placement: {
      control: "radio",
      options: [
        "top",
        "left",
        "right",
        "bottom",
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight",
        "leftTop",
        "leftBottom",
        "rightTop",
        "rightBottom",
      ],
    },
  },
};
