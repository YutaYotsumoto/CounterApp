/* eslint-disable react-native/no-inline-styles */
import React from 'react'; //Reactを宣言
import {StyleSheet, SafeAreaView, View} from 'react-native'; //imoportするものを表

import Header from '../components/Header/Header';
import Counter from '../components/Counter/CounterPart';
import PlusButton from '../components/CountButton/PlusButton';
import MinusButton from '../components/CountButton/MinusButton';
import ResetButton from '../components/ResetButton/ResetButton';

//functional component(arrow関数)
const Screen = () => {
  return (
    <SafeAreaView backgroundColor="skyblue">
      <View backgroundColor="white">
        {/* -- < HeaderPart > --------------------------------------------------------------------------------------------------------------------------*/}
        <Header text="Counter" />

        {/* -- < counterPart > -------------------------------------------------------------------------------------------------------------------*/}
        <Counter text="0" />

        {/* -- < buttonPart > -------------------------------------------------------------------------------------------------------------------------- */}
        <View style={[styles.flexbox, {marginTop: 30}]}>
          <MinusButton text="-" />
          <PlusButton text="+" />
        </View>

        {/* -- < resetButtonPart > -------------------------------------------------------------------------------------------------------------------------- */}
        <View style={[styles.flexbox, {marginTop: 100}]}>
          <ResetButton text="reset" />
        </View>
      </View>
    </SafeAreaView>
  );
};

//各要素に対してstyleSheetコンポネントで装飾
const styles = StyleSheet.create({
  flexbox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Screen; //App.js でimportするためにexport
