import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({buttonText}) => {
  return (
    <TouchableOpacity>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    width: 60,
    height: 60,
    backgroundColor: 'tomato',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
  },
});

export default Button;
