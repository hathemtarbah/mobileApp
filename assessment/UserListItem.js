import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserListItem = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.status}>{user.online ? 'Online' : 'Offline'}</Text>
    </View>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontWeight: 'bold',
  },
  status: {
    fontSize: 12,
    color: '#888',
  },
});
