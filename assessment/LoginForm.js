import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import validator from 'validator';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const navigation = useNavigation();

  const login = async () => {
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3333/api/1.0.0/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        });

        const data = await response.json();

        if (response.ok) {
          const sessionToken = data.session_token;

          setSuccessMessage('Login successful!');
          setErrors({});

          // Store the session token using AsyncStorage
          await AsyncStorage.setItem('sessionToken', sessionToken);

          navigation.navigate('Home', { sessionToken }); // Pass sessionToken as a parameter
        } else {
          // Handle server-side errors or validation errors
          setErrors(data.errors);
        }
      } catch (error) {
        // Handle any error that occurred during the API request
        console.error('Error logging in:', error);
      }
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!email) {
      formIsValid = false;
      errors['email'] = 'Email is required.';
    } else if (!validator.isEmail(email)) {
      formIsValid = false;
      errors['email'] = 'Please provide a valid email.';
    }

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/;

    if (!password) {
      formIsValid = false;
      errors['password'] = 'Password is required.';
    } else if (!passwordRegex.test(password)) {
      formIsValid = false;
      errors[
        'password'
      ] = 'Password must have at least 8 characters, 1 capital letter, 1 number, and 1 special character.';
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.error}>{errors.email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Text style={styles.error}>{errors.password}</Text>
      <Button title="Log in" onPress={login} />
      {successMessage ? (
        <Text style={styles.success}>{successMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  error: {
    color: 'red',
    marginBottom: 10
  },
  success: {
    color: 'green'
  }
});

export default LoginForm;
