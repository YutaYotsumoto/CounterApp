import React from 'react'; //Reactを宣言
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'; //imoportするものを表記

// import Header from '../components/Header';

//functional component(arrow関数)
const Screen = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Counter</Text>
      </View>

      <View style={styles.counterPart}>
        <Text style={styles.counterDigit}>0</Text>
      </View>

      <View style={styles.buttonsPart}>
        <TouchableOpacity style={styles.buttonBasePlus}>
          <Text style={styles.buttonPlus}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBaseMinus}>
          <Text style={styles.buttonMinus}>-</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text>リセット</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//各要素に対してstyleSheetコンポネントで装飾
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'tomato',
  },
  header: {
    padding: 10,
    width: '100%',
    backgroundColor: 'skyblue',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  counterPart: {
    paddingTop: 150,
    paddingBottom: 150,
    backgroundColor: 'yellow',
    marginBottom: 50,
  },
  counterDigit: {
    fontWeight: 'bold',
    fontSize: 100,
    textAlign: 'center',
  },
  buttonsPart: {
    flex: 1,
    flexDirection: 'row-reverse', //子要素を横並び　かつ　並び順(右左)を反対
    alignItems: 'center', //垂直方向
    justifyContent: 'space-around', //水平方向
    width: '100%',
    marginTop: 50,
  },
  buttonBasePlus: {
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
    borderRadius: 5,
  },
  buttonBaseMinus: {
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
    borderRadius: 5,
  },
  buttonPlus: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    paddingTop: 9,
  },
  buttonMinus: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    paddingTop: 9,
  },
});

export default Screen; //App.js でimportするためにexport
