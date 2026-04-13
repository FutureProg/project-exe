import { colors, fontSize, space, radius } from '@/styles/tokens.native';
import { useOnMount } from '@/utils/useOnMount';
import React, { useEffect, useRef, useState } from 'react';
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
        borderRadius: radius.xl,
        padding: space.xl,    
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
    generationTime?: number;
    animationSpeed?: number;
};

export const ChatBubble = ({ message, isUser, animationSpeed = 10 }: ChatBubbleProps) => {
    const [typingProgress, setTypingProgress] = useState(animationSpeed >= 0 ? 0 : message.length);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useOnMount(() => {
        if (animationSpeed < 0) return;
        setTypingProgress(0);
        intervalRef.current = setInterval(() => {
            setTypingProgress(prev => {
                if (prev >= message.length) {
                    clearInterval(intervalRef.current!);
                    return prev;
                }
                return prev + 1;
            });
        }, animationSpeed);
        return () => clearInterval(intervalRef.current!);
    });
    return (
        <View style={styles.container}>
            <View style={styles.bubble}>
                <Text style={styles.text}>{message.slice(0, typingProgress)}</Text>
            </View>
        </View>
    )
};