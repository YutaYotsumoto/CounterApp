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

      <View>
        <Text>0</Text>
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
    padding: 15,
    width: '100%',
    backgroundColor: 'skyblue',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
  },
  button: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Screen; //App.js でimportするためにexport
