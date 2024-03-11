import React from 'react';
import { View, StyleSheet } from 'react-native';

const Circle = ({ diameter, color }) => {
  return (
    <View style={[styles.circle, { width: diameter, height: diameter, backgroundColor: color }]} />
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 999, 
  },
});

export default Circle;