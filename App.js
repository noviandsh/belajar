import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  ImageBackground
} from 'react-native';
import Pencet from './Pencet';
import Judul from './Judul';
import Salam from './Salam';
import MenuBtn from './MenuBtn';
import ScrollPage from './ScrollPage';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./bg.jpg')} style={styles.container}>
        <Judul />
        <ScrollPage anu='wkwk' />
        <MenuBtn />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#eee',
    justifyContent: 'space-between'
  },
});
