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

      <View>
        <TouchableOpacity>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.button}>-</Text>
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
  button: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Screen; //App.js でimportするためにexport
