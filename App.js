import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground
} from 'react-native';
import Judul from './Judul'

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./bg.jpg')} style={styles.container}>
        <Judul />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
