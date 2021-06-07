import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = ({text}) => {
  return (
    <View style={styles.HeaderStyle} backgroundColor="skyblue">
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderStyle: {
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    marginBottom: 5,
  },
});

export default Header;
