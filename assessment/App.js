import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginForm';
import SignupScreen from './SignupForm';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import SettingsScreen from './Settings';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Log in" component={LoginScreen} />
        <Stack.Screen name="Sign up" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chats" component={ChatScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;