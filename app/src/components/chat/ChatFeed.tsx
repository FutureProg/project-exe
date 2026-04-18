import { StyleSheet, View } from "react-native";
import { ChatBubble } from "./ChatBubble";
import { space } from "@/styles/tokens.native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: space.base,
        padding: space.base,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    message: {
        marginBottom: 10,
    },
});
    

export const ChatFeed = () => {
    const testMessages = [
        "Hello! How can I assist you today?",
        "I'm looking for a good restaurant nearby.",
        "Sure! What type of cuisine are you in the mood for?",
    ];

    return (
        <View style={styles.container}>
            {testMessages.map((message, index) => (
                <ChatBubble key={index} message={message} animationSpeed={index === testMessages.length-1 ? 10 : 0} />
            ))}
        </View>
    );
};