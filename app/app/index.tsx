import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, space, fontSize } from "@/styles/tokens.native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Project EXE</Text>
        <Text style={styles.subtitle}>Your AI companion</Text>
        <View style={styles.messageBox}>
          <Text>This is a message box styled with CSS.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  messageBox: {
    width: 400,
    height: 160,
    backgroundColor: colors.primary, // --color-primary: oklch(0.55 0.20 250)
    alignItems: "center",
    justifyContent: "center",
    marginTop: space[4],
  },
  container: {
    flex: 1,
    backgroundColor: colors.surface, // --color-surface: oklch(0.99 0.00 0)
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: space[4],
  },
  title: {
    fontSize: fontSize["2xl"],
    fontWeight: "bold",
    marginBottom: space[2],
    color: colors.text, // --color-text: oklch(0.13 0.00 0)
  },
  subtitle: {
    fontSize: fontSize.lg,
    color: colors.textSecondary, // --color-text-secondary: oklch(0.45 0.00 0)
  },
});
