import { StyleSheet, View } from 'react-native';
import StorybookUIRoot from '../.rnstorybook';

export default function StorybookScreen() {
  return (
    <View style={styles.container}>
      <StorybookUIRoot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});