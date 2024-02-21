import React from 'react';
import { View, StyleSheet } from 'react-native';

const Circle = ({ diameter, color }) => {
  return (
    <View style={[styles.circle, { width: diameter, height: diameter, backgroundColor: color }]} />
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 999, // Set to a large value to ensure it's a perfect circle
  },
});

export default Circle;