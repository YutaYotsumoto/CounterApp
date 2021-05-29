import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

//exportできるclass名Button　作成　Reactコンポーネントクラスを定義＝＞Components(React.Component) を継承する
export default class Button extends Components {
  constructor(props) {
    //constructorで Button classのの中身を定義　引数にpropsをで親コンポネントCounter.js　に箱を作る
    super(props); //super(props);を宣言することで 親コンポネント(ReactComponents)を参照　以下でthisを使えるようにする
    this.state = {}; //stateの宣言　constructor内での宣言
  }
}
