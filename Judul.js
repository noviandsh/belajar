import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Judul extends React.Component {
  render() {
    return (
      <View style={styles.judul}>
        <Text style={styles.textJudul}>Belajar React-Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  judul: {
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textJudul: {
    fontSize: 20,
    color: 'white',
  }
});
