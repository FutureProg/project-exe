import { colors, fontSize, space, radius } from '@/styles/tokens.native';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'        
    },
    bubble: {
        backgroundColor: colors.surface,
        borderRadius: radius.md,
        padding: space[6],
        maxWidth: '80%',
    },
    text: {
        color: colors.text,
        fontSize: fontSize.base,
    }    
});

export type ChatBubbleProps = {
    message: string;
    isUser?: boolean;
};

export const ChatBubble = ({ message, isUser }: ChatBubbleProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.bubble}>
                <Text style={styles.text}>{message}</Text>
            </View>
        </View>
    )

};