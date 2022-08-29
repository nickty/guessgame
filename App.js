/** @format */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import StarGameScreen from './screens/StarGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.screen}>
      <StarGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ddb52f',
    flex: 1,
  },
});
