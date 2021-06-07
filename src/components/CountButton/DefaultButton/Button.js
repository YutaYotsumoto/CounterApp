import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({buttonText, buttonColor}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonBase, {backgroundColor: buttonColor}]}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    width: 70,
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2, //shadowの左右位置
      height: 4, //shadow上下位置
    },
    shadowOpacity: 0.25, //shadowの透明度
    shadowRadius: 4, //shadowのぼかし
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontSize: 35,
    paddingTop: 6,
  },
});

export default Button;
