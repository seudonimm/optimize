import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/screens/Main';
import MainFunction from './src/screens/MainFunction';

export default function App() {
  return (
    <View style={styles.container}>
      <MainFunction/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
