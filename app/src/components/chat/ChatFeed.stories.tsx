// Story for ChatFeed component
import { ChatFeed } from "./ChatFeed";
import type { Meta, StoryObj } from '@storybook/react-native';

type Story = StoryObj<typeof ChatFeed>;

export default {
    title: 'Chat/ChatFeed',
    component: ChatFeed,
} as Meta<typeof ChatFeed>;

export const Default: Story = {
    args: {
        messages: [
            { id: '1', text: 'Hello!', sender: 'user', timestamp: new Date() },
            { id: '2', text: 'Hi there! How can I help?', sender: 'bot', timestamp: new Date() },
        ],
    },
};

