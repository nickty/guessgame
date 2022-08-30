/** @format */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const GameScreen = () => {


  return (
    <View styles={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
           <View>
              <Text>Higher or Lower</Text>
              {/* + 
              - */}
            </View> 

            <Text styles={{color: '#ffffff'}}>Long Rounds</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen : {
    flex: 1, 
    padding: 24, 
    
  }, 
  title: {
    fontSize: 24,
  color: '#ddb52f',
  textAlign: 'center',
  padding: 12,
  borderColor: '#ddb52f',
  borderWitch: 1
  }
});
