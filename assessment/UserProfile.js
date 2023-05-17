import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfile = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.status}>{user.online ? 'Online' : 'Offline'}</Text>
      <Text style={styles.details}>Email: {user.email}</Text>
      <Text style={styles.details}>Phone: {user.phone}</Text>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
  details: {
    fontSize: 16,
    marginBottom: 10,
  },
});
