import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ onLogin, onSignup }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the App!</Text>
      <Button
        title="Log in"
        onPress={onLogin}
      />
      <Button
        title="Sign up"
        onPress={onSignup}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
