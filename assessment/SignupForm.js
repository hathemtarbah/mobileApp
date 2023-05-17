import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';
import validator from 'validator';
import { useNavigation } from '@react-navigation/native';

const SignupForm = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const navigation = useNavigation();

  const addUser = () => {
    return fetch("http://localhost:3333/api/1.0.0/user/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
      })
    });
  };

  const signup = async () => {
    if (validateForm()) {
      try {
        const response = await addUser();

        if (response.status !== 201) {
          const errorText = await response.text();
          throw new Error(errorText);
        } else {
          Alert.alert("User Added!");
          setSuccessMessage('Signup successful!');
          setErrors({});
        }
      } catch (error) {
        console.error('There was an error!', error);
      } finally {
        navigation.navigate('Home');
      }
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!first_name) {
      formIsValid = false;
      errors['first_name'] = 'First name is required.';
    }

    if (!last_name) {
      formIsValid = false;
      errors['last_name'] = 'Last name is required.';
    }

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
      errors['password'] =
        'Password must have at least 8 characters, 1 capital letter, 1 number, and 1 special character.';
    }

    if (!confirmPassword || confirmPassword !== password) {
      formIsValid = false;
      errors['confirmPassword'] = 'Password confirmation does not match.';
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={setFirstName}
        value={first_name}
      />
      <Text style={styles.error}>{errors.first_name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={setLastName}
        value={last_name}
      />
      <Text style={styles.error}>{errors.last_name}</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <Text style={styles.error}>{errors.confirmPassword}</Text>
      <Button title="Sign up" onPress={signup} />
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

export default SignupForm;