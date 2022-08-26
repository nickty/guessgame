/** @format */

import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

const StarGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StarGameScreen;

const styles = StyleSheet.create({});
