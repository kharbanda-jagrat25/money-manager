import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    fontFamily: 'Poppins',
  },
});

const GradientContainer = (props) => {
  return (
    <LinearGradient
      colors={['#1A2440', '#313C5C']}
      style={styles.gradientContainer}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0, y: 0 }}
    >
        {props.children}
    </LinearGradient>
  );
};

export default GradientContainer;