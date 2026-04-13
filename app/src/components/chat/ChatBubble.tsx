import { colors, fontSize, space, radius } from '@/styles/tokens.native';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'black'        
    },
    bubble: {
        width: '100%',
        backgroundColor: colors.surface,
        borderRadius: radius.lg,
        cornerShape: 'rounded',
        padding: space[6],
        maxWidth: 640,
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