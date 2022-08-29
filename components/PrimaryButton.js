/** @format */

import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { Children } from 'react';

const PrimaryButton = ({ children, onPress  }) => {
  return (
    <View style={styles.outerContainter}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#000000' }}
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainter: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: '#ffffff',
    // borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    // margin: 4,
  },
  buttonText: {
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
