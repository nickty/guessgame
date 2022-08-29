/** @format */

import { StyleSheet, Alert, Text, TextInput, View } from 'react-native';
import React, { useState  } from 'react';
import PrimaryButton from '../components/PrimaryButton';

const StarGameScreen = () => {
  const [number, setnumber] = useState('')

  const numberInputHanlder = (input) => {
    setnumber(input)
  }

  const resetNumber = () => {
    setnumber('')
  }

  const confirmInput = () => {
    const chosenNumber = parseInt(number)

    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('Invalid Number', "It has to be a number", [{text: 'Okay', style: 'desctuctive', onPress: resetNumber}])
      return; 
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        value={number}
        onChangeText={numberInputHanlder}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonCont}>
          <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonCont}>
          <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StarGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#72063c',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonCont: {
    flex: 1,
  },
});
