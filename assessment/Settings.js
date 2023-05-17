import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({ onUpdateProfile, onLogout, route }) => {
  const { sessionToken } = route.params; // Get the session token from the route parameters

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Text>Session Token: {sessionToken}</Text> {/* Display the session token */}
      <Button
        title="Profile settings"
        onPress={() => navigation.navigate('Profile Settings')}
      />
      <Button
        title="Logout"
        onPress={onLogout}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
