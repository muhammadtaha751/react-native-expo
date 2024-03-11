import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import * as shape from 'd3-shape';

const StatsLineGraph = ({ data, width, height }) => {
  const line = shape.line()
    .x((d, i) => i * (width / (data.length - 1)))
    .y(d => height - d);

  const path = line(data);

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        <Path
          d={path}
          fill="none"
          stroke="blue"
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default StatsLineGraph;