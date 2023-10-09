import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Background from './others/Background2';
import { purple, white } from './others/Constants';
import Field from './others/Field';
import Btn from './others/Btn';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationError, setValidationError] = useState('');
  
    const handleSignup = async () => {
        setValidationError('');
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!firstName || !lastName || !email || !contactNumber || !password || !confirmPassword) {
        setValidationError('Please fill out all fields.');
      } else if (!/^\d{10}$/.test(contactNumber)) {
        setValidationError('Contact number must be exactly 10 digits.');
      } else if (!password.match(passwordRegex)) {
        setValidationError('Password must contain at least 1 letter, 1 number, and 1 special character, and be at least 8 characters long.');
      } else if (password !== confirmPassword) {
        setValidationError('Passwords do not match.');
      } else {
        // Valid form, proceed with signup
        alert("Account created");
        props.navigation.navigate('Login');
      }
    };
  
    return (
      <Background>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.registerText}>Register</Text>
            <View style={styles.formContainer}>
              <Text style={styles.formHeaderText}>Create a new account</Text>
              <Field placeholder="First Name" value={firstName} onChangeText={setFirstName} />
              <Field placeholder="Last Name" value={lastName} onChangeText={setLastName} />
              <Field placeholder="Email Address" keyboardType="email-address" value={email} onChangeText={setEmail} />
              <Field placeholder="Contact Number" keyboardType="number" value={contactNumber} onChangeText={setContactNumber} />
              <Field placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
              <Field placeholder="Confirm Password" secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword} />
              {validationError ? <Text style={styles.errorText}>{validationError}</Text> : null}
              <Text></Text>
              <Btn
                textColor={white}
                bgColor={purple}
                btnLabel="Submit"
                Press={handleSignup}
              />
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account ?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                  <Text style={styles.loginLink}> Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Background>
    );
  };

const styles = StyleSheet.create({
  scrollView: {
    height: Dimensions.get('window').height * 1.2,
    marginBottom: 50,
  },
  container: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  registerText: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  formContainer: {
    backgroundColor: 'white',
    height: 920,
    width: 393,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 20,
    alignItems: 'center',
  },
  formHeaderText: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    color: purple,
    fontWeight: 'bold',
    marginBottom: 100,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 40,
  },
});

export default Signup;
