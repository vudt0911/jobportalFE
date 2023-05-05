import type { Meta, StoryObj } from "@storybook/react";
import { FormSelect } from "./index";

const meta: Meta<typeof FormSelect> = {
  title: "components/FormSelect",
  component: FormSelect,
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<typeof FormSelect> = {
  args: {
    name: "name sample",
    options: [
      { label: "test 1", value: 1, color: "lightblue" },
      { label: "test 2", value: 2 },
      { label: "test 3", value: 3 },
      { label: "test 4", value: 4 },
      { label: "test 5", value: 5 },
      { label: "test 6", value: 6 },
    ],
    defaultValue: 1,
    isColorItem: true,
    label: "label sample",
    mode: "multiple",
    placeholder: "placeholder sample",
    allowClear: true,
    autoClearSearchValue: true,
    bordered: true,
    disabled: false,
    popupClassName: "popupClassName sample",
    loading: false,
    // tagRender?: (props: CustomTagProps) => ReactNode,
    size: "middle",
    removeMargin: true,
  },
};
