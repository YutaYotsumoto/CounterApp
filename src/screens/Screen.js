import React from 'react'; //Reactを宣言
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'; //imoportするものを表記

// import Header from '../components/Header';

//functional component(arrow関数)
const Screen = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}>Counter</Text>
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
    </SafeAreaView>
  );
};

//各要素に対してstyleSheetコンポネントで装飾
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'tomato',
  },
  header: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
  text: {
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Screen; //App.js でimportするためにexport
