import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const RadioButtons = () => {
  const [checked, setChecked] = useState('first');

  return (
    <View style={styles.container}>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
          color="#293c4f" // Customize the color
        />
        <Text>52% Paris</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
          color="#293c4f" // Customize the color
        />
        <Text>25% Marseille</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          value="third"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('third')}
          color="#293c4f" // Customize the color
        />
        <Text>23% Lyon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default RadioButtons;
