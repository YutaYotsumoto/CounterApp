import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Counter = ({text}) => {
  return (
    <View style={styles.ViewStyle} backgroundColor="yellow">
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    paddingTop: 150,
    paddingBottom: 150,
    marginBottom: 50,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontSize: 100,
  },
});

export default Counter;
