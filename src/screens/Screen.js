/* eslint-disable react-native/no-inline-styles */
import React from 'react'; //Reactを宣言
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'; //imoportするものを表記

// import Header from '../components/Header';

//functional component(arrow関数)
const Screen = () => {
  return (
    <View>
      {/* -- < HeaderPart > --------------------------------------------------------------------------------------------------------------------------*/}

      <View style={{padding: 10, width: '100%'}} backgroundColor="skyblue">
        <Text style={[styles.text, {color: 'white', marginTop: 30}]}>
          Counter
        </Text>
      </View>

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
          {
            justifyContent: 'space-around', //justifyContentを　'center' から 'space-around' へ上書き
            marginTop: 50,
          },
        ]}>
        <TouchableOpacity style={styles.buttonBase}>
          <Text style={[styles.text, {fontSize: 30, paddingTop: 10}]}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBase}>
          <Text style={[styles.text, {fontSize: 30, paddingTop: 10}]}>+</Text>
        </TouchableOpacity>
      </View>

      {/* -- < resetButtonPart > -------------------------------------------------------------------------------------------------------------------------- */}

      <View
        style={[
          styles.flexbox,
          {
            marginTop: 100,
          },
        ]}>
        <TouchableOpacity
          style={[
            styles.buttonBase,
            {
              width: 100, //buttonBaseの　widthを60　から 100　へ上書き
            },
          ]}>
          <Text style={[styles.text, {paddingTop: 17}]}>リセット</Text>
        </TouchableOpacity>
      </View>
    </View>
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

  safeArea: {
    // backgroundColor: 'tomato',
  },

  header: {
    // padding: 10,
    // width: '100%',
    // backgroundColor: 'skyblue',
  },

  headerText: {
    // color: 'white',
    // fontSize: 25,
    // fontWeight: 'bold',
    // textAlign: 'center',
    // marginTop: 30,
  },

  counterPart: {
    // paddingTop: 150,
    // paddingBottom: 150,
    // backgroundColor: 'yellow',
    // marginBottom: 50,
  },

  counterDigit: {
    // fontWeight: 'bold',
    // fontSize: 100,
    // textAlign: 'center',
  },

  buttonsPart: {
    // flex: 1,
    // flexDirection: 'row', //子要素を横並び　かつ　並び順(右左)を反対
    // alignItems: 'center', //垂直方向
    // justifyContent: 'space-around', //水平方向
    // width: '100%',
    // marginTop: 50,
  },

  resetPart: {
    // marginTop: 100,
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  resetButtonBase: {
    // width: 100,
    // height: 50,
    // borderRadius: 5,
    // backgroundColor: 'tomato',
  },
  resetText: {
    // fontWeight: 'bold',
    // fontSize: 25,
    // color: 'black',
    // textAlign: 'center',
    // paddingTop: 13,
  },
});

export default Screen; //App.js でimportするためにexport
