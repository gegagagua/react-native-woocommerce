import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
import { Constants } from 'expo';
import Index from './src/index';

export default class App extends React.Component {
  render() {
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight, paddingLeft: 10, paddingRight: 10 }}>
        <Index/>
      </Container>
    );
  }
}