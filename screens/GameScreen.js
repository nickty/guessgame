/** @format */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const GameScreen = () => {


  return (
    <View styles={styles.screen}>
      <Text>Opponent's Guess</Text>
           <View>
              <Text>Higher or Lower</Text>
              {/* + 
              - */}
            </View> 

            <Text>Long Rounds</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen : {
    flex: 1, 
    padding: 12, 
    
  }
});
