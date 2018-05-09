import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class Salams extends Component{
  render(){
    return(
      <Text>Halo {this.props.name}!</Text>
    )
  }
}
class Calc extends Component{
  render(){
    return(
      <Text>{this.props.a1} + {this.props.a2} = {this.props.a1+this.props.a2}</Text>
    )
  }
}
export default class Salam extends React.Component {
  constructor(){
    super();
    this.state = {nama:'',a1:0,a2:0,}
  }
  render() {
    return (
      <View style={styles.containerSalam}>
        <TextInput onChangeText={(text) => {this.setState({nama:text})}} />
        <Text style={styles.nama}>Selamat Datang wahai {this.state.nama}</Text>
        <Salams name='Novian' />
        <TextInput onChangeText={(text) => {this.setState({a1:text})}} />
        <TextInput onChangeText={(text) => {this.setState({a2:text})}} />
        <Calc a1={this.state.a1} a2={this.state.a2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSalam: {
    flex: 1,
    padding: 5,
  },
  nama: {
    color: 'red',
    fontSize: 20,
  }
});
