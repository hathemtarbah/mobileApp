import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
  }

  // Navigation functions
  navigateToLogin = () => {
    // Navigate to Login screen
  }

  navigateToSignup = () => {
    // Navigate to Signup screen
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to WhatsThat!</Text>
        <Button 
          title="Login" 
          onPress={this.navigateToLogin} 
        />
        <Button 
          title="Signup" 
          onPress={this.navigateToSignup} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
});

export default App;
