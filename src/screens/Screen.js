/* eslint-disable react-native/no-inline-styles */
import React from 'react'; //Reactを宣言
import {StyleSheet, SafeAreaView, Text, View} from 'react-native'; //imoportするものを表

import PlusButton from '../components/PlusButton';
import MinusButton from '../components/MinusButton';
import ResetButton from '../components/ResetButton';
import Header from '../components/Header';

//functional component(arrow関数)
const Screen = () => {
  return (
    <SafeAreaView backgroundColor="skyblue">
      <View backgroundColor="white">
        {/* -- < HeaderPart > --------------------------------------------------------------------------------------------------------------------------*/}

        <Header text="Counter" />

        {/* -- < counterPart > -------------------------------------------------------------------------------------------------------------------*/}

        <View
          style={{
            paddingTop: 150,
            paddingBottom: 150,
            backgroundColor: 'yellow',
            marginBottom: 50,
          }}>
          <Text style={[styles.text, {fontSize: 100}]}>0</Text>
        </View>

        {/* -- < buttonPart > -------------------------------------------------------------------------------------------------------------------------- */}

        <View
          style={[
            styles.flexbox,
            {justifyContent: 'space-around', marginTop: 30},
          ]}>
          <MinusButton text="-" />
          <PlusButton text="+" />
        </View>

        {/* -- < resetButtonPart > -------------------------------------------------------------------------------------------------------------------------- */}

        <View
          style={[
            styles.flexbox,
            {
              marginTop: 100,
            },
          ]}>
          <ResetButton text="reset" />
        </View>
      </View>
    </SafeAreaView>
  );
};

//各要素に対してstyleSheetコンポネントで装飾
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

  flexbox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen; //App.js でimportするためにexport
