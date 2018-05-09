import React, { Component } from 'react';
import { 
    StyleSheet, 
    Platform, 
    Text, 
    TextInput, 
    View, 
    Alert, 
    TouchableHighlight
} from 'react-native';

export default class MenuBtn extends React.Component {
  constructor(){
    super();
    this.state = {nama:'',a1:0,a2:0,}
  }
  _onPressButton() {
    Alert.alert('Kamu Menekan Button!')
  }
 
  _onLongPressButton() {
    Alert.alert('Kamu Menekan Button Dengan Lama!')
  }

  menu(){
    Alert.alert('ini menu')
  }
  render() {
    return (
      <View style={styles.containerPencet}>
        <TouchableHighlight onPress={this.menu} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.menu} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.menu} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.menu} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPencet: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});