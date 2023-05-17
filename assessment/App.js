import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import validator from 'validator'; // import validator library

class App extends Component {
  constructor(props){
    super(props);
    // Initialize the state with empty values for email and password
    this.state = {
      email: '',
      password: '',
      errors: {}, // store error messages
      successMessage: '' // store success message
    };
  }

  // Define the login function
  // It will update the successMessage in the state
  login = () => {
    if (this.validateForm()) {
      const { email, password } = this.state;
      this.setState({
        successMessage: `Logged in with email: ${email} and password: ${password}`,
        errors: {} // clear any existing errors
      });
    }
  }

  // Validation function
  validateForm = () => {
    const { email, password } = this.state;
    let errors = {};
    let formIsValid = true;

    if (!email) {
      formIsValid = false;
      errors["email"] = "Email is required.";
    } else if (!validator.isEmail(email)) {
      formIsValid = false;
      errors["email"] = "Please provide a valid email.";
    }

    // Regular expression for password validation
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/;

    if (!password) {
      formIsValid = false;
      errors["password"] = "Password is required.";
    } else if (!passwordRegex.test(password)) {
      formIsValid = false;
      errors["password"] = "Password must have at least 8 characters, 1 capital letter, 1 number, and 1 special character.";
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text style={{color: 'red'}}>{this.state.errors.email}</Text>
        <TextInput
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Text style={{color: 'red'}}>{this.state.errors.password}</Text>
        <Button
          title="Log in"
          onPress={this.login}
        />
        {this.state.successMessage ? <Text style={{color: 'green'}}>{this.state.successMessage}</Text> : null}
      </View>
    );
  }
}

export default App;
