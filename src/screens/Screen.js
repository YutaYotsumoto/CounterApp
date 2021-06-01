import React from 'react'; //Reactを宣言
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native'; //imoportするものを表記

// import Header from '../components/Header';

//functional component(arrow関数)
const Screen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Counter</Text>
      <Text>0</Text>

      <TouchableOpacity>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.button}>-</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>リセット</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

//各要素に対してstyleSheetコンポネントで装飾
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'tomato',
  },
  text: {
    color: 'black',
  },
  button: {
    color: 'black',
  },
});

export default Screen; //App.js でimportするためにexport
