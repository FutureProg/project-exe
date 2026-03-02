import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

import { Button } from "./Button";

const meta = {
  title: "Common/Button",
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "flex-start", padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  args: {
    onPress: () => console.log("Button pressed"),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary Button",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    title: "Ghost Button",
    variant: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};
