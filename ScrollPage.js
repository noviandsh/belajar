import React, { Component } from 'react';
import {
    StyleSheet, ScrollView, Image, Text
} from 'react-native';

export default class ScrollPage extends Component {
    render() {
        return (
            <ScrollView style={styles.scrollCont}>
                <Text style={styles.text}>{this.props.anu} Scroll me plz</Text>
                <Text style={styles.text}>If you like</Text>
                <Text style={styles.text}>Scrolling down</Text>
                <Text style={styles.text}>Whats the best</Text>
                <Text style={styles.text}>Framework around?</Text>
                <Text style={styles.text}>React Native</Text>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    scrollCont: {
        flex:1
    },
    text: {
        fontSize: 96,
        color: 'white'
    }
});