import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import validator from 'validator';

class SignupForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      successMessage: ''
    };
  }

  signup = () => {
    if (this.validateForm()) {
      this.setState({
        successMessage: 'Signup successful!',
        errors: {}
      });
    }
  }

  validateForm = () => {
    const { email, password, confirmPassword } = this.state;
    let errors = {};
    let formIsValid = true;

    if (!email) {
      formIsValid = false;
      errors["email"] = "Email is required.";
    } else if (!validator.isEmail(email)) {
      formIsValid = false;
      errors["email"] = "Please provide a valid email.";
    }

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/;

    if (!password) {
      formIsValid = false;
      errors["password"] = "Password is required.";
    } else if (!passwordRegex.test(password)) {
      formIsValid = false;
      errors["password"] = "Password must have at least 8 characters, 1 capital letter, 1 number, and 1 special character.";
    }

    if (!confirmPassword || confirmPassword !== password) {
      formIsValid = false;
      errors["confirmPassword"] = "Password confirmation does not match.";
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text style={styles.error}>{this.state.errors.email}</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Text style={styles.error}>{this.state.errors.password}</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          value={this.state.confirmPassword}
          secureTextEntry={true}
        />
        <Text style={styles.error}>{this.state.errors.confirmPassword}</Text>
        <Button
          title="Sign up"
          onPress={this.signup}
        />
        {this.state.successMessage ? <Text style={styles.success}>{this.state.successMessage}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  success: {
    color: 'green',
  },
});

export default SignupForm;
