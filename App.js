/** @format */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import StarGameScreen from './screens/StarGameScreen';
import { LinearGradient} from 'expo-linear-gradient'

export default function App() {
  return (
    <LinearGradient colors={['#000000', '#ffffff ']} style={styles.screen}>
     <ImageBackground style={styles.screen} imageStyle={styles.backImage} source={require('./assets/splash.png')} resizeMode="cover">
     <StarGameScreen />
     </ImageBackground>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backImage: {
    opcity: 0.50
  }
});
