import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sender}>{message.sender}</Text>
      <Text style={styles.message}>{message.text}</Text>
      <Text style={styles.time}>{message.time}</Text>
    </View>
  );
};

export default SingleMessage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    marginBottom: 5,
  },
  time: {
    fontSize: 10,
    color: '#888',
  },
});
