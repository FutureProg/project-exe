import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

import { ChatBubble } from "./ChatBubble";

const meta = {
  title: "chat/ChatBubble",
  component: ChatBubble,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "flex-start", padding: 16}}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ChatBubble>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const UserMessage: Story = {
  args: {
    message: "Hello, how are you?",
    isUser: true
  },
};