/** @format */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StarGameScreen from './screens/StarGameScreen';
import { LinearGradient} from 'expo-linear-gradient' 
import React, { useState } from 'react'
import GameScreen from './screens/GameScreen';

export default function App() {
  const [first, setfirst] = useState() 

  function pickNumberHanlder(pickedNumber){
    setfirst(pickedNumber)
  }

  let screen = <StarGameScreen onPickedNumber = {pickNumberHanlder} />
  if(first){
    screen = <GameScreen />
  }
  return (
    <LinearGradient colors={['#000000', '#ffffff ']} style={styles.screen}>
     <ImageBackground style={styles.screen} imageStyle={styles.backImage} source={require('./assets/splash.png')} resizeMode="cover">
    <SafeAreaView style={styles.rootArea }>
    {screen}
    </SafeAreaView>
     
     </ImageBackground>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootArea: {
    flex: 1
  },
  screen: {
    flex: 1,
  },
  backImage: {
    opcity: 0.50
  }
});
