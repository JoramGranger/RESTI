// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, interpolate, withTiming } from 'react-native-reanimated';
import colors from '../../styles/colors';

const SplashScreen = () => {
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    animatedValue.value = withTiming(1, {
      duration: 4000,
      easing: Easing.linear,
    });
  }, []);

  const waveAnimation = (index) => {
    return useAnimatedStyle(() => {
      const height = interpolate(animatedValue.value, [0, 1], [20, 60]); // Adjust height values
      return {
        height,
      };
    });
  };

  const letterOpacity = (index) => {
    return useAnimatedStyle(() => {
      const opacity = interpolate(animatedValue.value, [0, 1], [0, 1]);
      return {
        opacity,
      };
    });
  };

  return (
    <Animated.View style={[styles.container]}>
      <View style={styles.centerContainer}>
        <View style={styles.colorLines}>
          <Animated.View style={[styles.colorLine, { backgroundColor: colors.primary }, waveAnimation(0)]}>
            <Animated.Text style={[styles.letter, letterOpacity(0)]}>R</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.colorLine, { backgroundColor: colors.secondaryYellow }, waveAnimation(1)]}>
            <Animated.Text style={[styles.letter, letterOpacity(1)]}>E</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.colorLine, { backgroundColor: colors.secondaryCoral }, waveAnimation(2)]}>
            <Animated.Text style={[styles.letter, letterOpacity(2)]}>S</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.colorLine, { backgroundColor: colors.secondaryPurple }, waveAnimation(3)]}>
            <Animated.Text style={[styles.letter, letterOpacity(3)]}>T</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.colorLine, { backgroundColor: colors.secondaryBlue }, waveAnimation(4)]}>
            <Animated.Text style={[styles.letter, letterOpacity(4)]}>I</Animated.Text>
          </Animated.View>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white, // White background
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorLines: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the lines horizontally
    alignItems: 'center', // Center the lines vertically
    position: 'absolute',
  },
  colorLine: {
    height: 20, // Initial height
    width: '16%', // Adjust width for 5 lines
    borderRadius: 2,
    marginHorizontal: 4, // Add spacing between lines
    overflow: 'hidden', // Ensure letters do not overflow
  },
  letter: {
    fontSize: 24, // Adjust letter size
    fontWeight: 'bold',
    color: colors.white,
    position: 'absolute',
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: [{ translateX: -12 }, { translateY: -12 }], // Center the letter within the line
  },
});

export default SplashScreen;
