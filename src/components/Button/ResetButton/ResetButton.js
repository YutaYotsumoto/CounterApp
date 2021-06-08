import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const ResetButton = ({text}) => {
  return (
    <TouchableOpacity style={styles.buttonBase}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    width: 100,
    height: 60,
    backgroundColor: 'springgreen',
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
    fontWeight: 'normal',
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'black',
    fontSize: 35,
    paddingTop: 6,
  },
});

export default ResetButton;
