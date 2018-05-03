import React, { Component } from 'react';
import {
  View
} from 'react-native';
// import './src/utils/firebase'
import Routes from './src/routes'
import * as firebase from 'firebase';


export default class App extends Component {
  render() {
    return (
      <View style= {{flex:1}} >
        <Routes />
      </View>
    );
  }
}

