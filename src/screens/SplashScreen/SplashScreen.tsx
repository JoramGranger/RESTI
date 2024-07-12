// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, interpolateColor, withTiming } from 'react-native-reanimated';
import colors from '../../styles/colors';

const SplashScreen = () => {
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    animatedValue.value = withTiming(1, {
      duration: 4000,
      easing: Easing.linear,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(animatedValue.value, [0, 1], [
      colors.primary,
      colors.secondaryYellow,
      colors.secondaryCoral,
      colors.secondaryPurple,
      colors.secondaryBlue,
    ]);

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container]}>
      <View style={styles.centerContainer}>
        <View style={styles.colorLines}>
          <View style={[styles.colorLine, { backgroundColor: colors.primary }]} />
          <View style={[styles.colorLine, { backgroundColor: colors.secondaryYellow }]} />
          <View style={[styles.colorLine, { backgroundColor: colors.secondaryCoral }]} />
          <View style={[styles.colorLine, { backgroundColor: colors.secondaryPurple }]} />
          <View style={[styles.colorLine, { backgroundColor: colors.secondaryBlue }]} />
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
    /* bottom: 20, */
  },
  colorLine: {
    height: 5,
    width: '16%', // Adjust width for 5 lines
    borderRadius: 2,
    marginHorizontal: 4, // Add spacing between lines
  },
});

export default SplashScreen;
