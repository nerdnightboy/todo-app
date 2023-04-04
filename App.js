import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* my todo app */}
      {/* remove all */}
      {/* wake up at 7 etc */}
      {/* todo input container */}

      <KeyboardAvoidingView style={styles.writetask}>
        <TextInput placeholder='Enter your task' style={styles.inputbox} value='123'  />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
