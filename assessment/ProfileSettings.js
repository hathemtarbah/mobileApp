import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileSettingsScreen = ({ onUpdateProfile, onChangePassword }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Settings</Text>
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
