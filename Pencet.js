import React, { Component } from 'react';
import { 
    StyleSheet, 
    Platform, 
    Text, 
    TextInput, 
    View, 
    Alert, 
    TouchableHighlight, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    TouchableWithoutFeedback 
} from 'react-native';

export default class Pencet extends React.Component {
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
  render() {
    return (
      <View style={styles.containerPencet}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Pencet yang lama dong</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPencet: {
    flex: 3,
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 20
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});