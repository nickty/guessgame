/** @format */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import StarGameScreen from './screens/StarGameScreen';
import { LinearGradient} from 'expo-linear-gradient'

export default function App() {
  return (
    <LinearGradient colors={['#000000', '#ffffff ']} style={styles.screen}>
      <StarGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
