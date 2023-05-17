import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileSettingsScreen = ({ onUpdateProfile, onChangePassword, route }) => {
  const { sessionToken } = route.params; // Get the session token from the route parameters

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Settings</Text>
      <Text>Session Token: {sessionToken}</Text> {/* Display the session token */}
      <Button
        title="Update Profile"
        onPress={onUpdateProfile}
      />
      <Button
        title="Change Password"
        onPress={onChangePassword}
      />
    </View>
  );
};

export default ProfileSettingsScreen;

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
