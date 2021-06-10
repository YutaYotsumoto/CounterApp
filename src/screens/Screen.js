/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react'; //Reactを宣言
import {StyleSheet, SafeAreaView, View} from 'react-native'; //imoportするものを表

import Header from '../components/Header/Header';
import Counter from '../components/Counter/CounterPart';
import PlusButton from '../components/Button/CountButton/Buttons/PlusButton';
import MinusButton from '../components/Button/CountButton/Buttons/MinusButton';
import ResetButton from '../components/Button/ResetButton/ResetButton';

//functional component
const Screen = () => {
  const [count, setCount] = useState(0);
  const countPlus = () => setCount(count + 1);
  const countMinus = () => setCount(count - 1);

  return (
    <SafeAreaView backgroundColor="skyblue">
      <View backgroundColor="white">
        <Header text="Counter" />

        <Counter text={count} />

        <View style={[styles.flexbox, {marginTop: 30}]}>
          <MinusButton text="-" onClick={countMinus} />
          <PlusButton text="+" onClick={countPlus} />
        </View>

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
