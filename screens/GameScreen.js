/** @format */

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

const GameScreen = () => {

   const nextGuessHanlder = (direction) => {
    if(direction === 'lower ')
   }

  return (
    <View>
      <Text>GameScreen</Text>
      <View>
      <PrimaryButton onPress={nextGuessHanlder}>+</PrimaryButton>
      <PrimaryButton onPress={nextGuessHanlder}>-</PrimaryButton>
      </View>
      
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
