import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const { sessionToken } = route.params;

  const onViewChats = () => {
    navigation.navigate('Chats', { sessionToken });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome back!</Text>
      <Button title="View Chats" onPress={onViewChats} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

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

export default HomeScreen;
