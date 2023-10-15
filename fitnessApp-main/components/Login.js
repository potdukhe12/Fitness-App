import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Background from './others/Background2';
import { purple, white } from './others/Constants';
import Field from './others/Field';
import Btn from './others/Btn';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleSubmit = async() =>{
    setValidationError('');
    if(email && password) {
      try{
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged In');
      }catch(err){
          setValidationError('Login error : ' + err.message);
      }
    }
    else {
      setValidationError('Please fill out all fields.');
    }
  } 

  return (
    <Background>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.formContainer}>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.loginDescription}>Login to your account</Text>
            <Text style={styles.errorText}>
                {validationError ? validationError : null}
            </Text>
            <Field placeholder="Email" keyboardType={'email-address'} value={email} onChangeText={value => setEmail(value)} />
            <Field placeholder="Password" secureTextEntry={true} value={password} onChangeText={value=>setPassword(value)} />
            <TouchableOpacity style={styles.forgotPassword}
                              onPress={() => { alert('Forgot Password?'); }} >
              <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
            </TouchableOpacity>

            <Btn textColor={white} bgColor={purple} btnLabel="Login"
                Press={handleSubmit} />
                
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account ?</Text>
              <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                <Text style={styles.signupLink}>Signup</Text>
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
  },
  container: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  title: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    height: 1000,
    // width: 393,
    width: Dimensions.get('window').width*0.95,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 70,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 40,
    color: purple,
    fontWeight: 'bold',
  },
  loginDescription: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    width: '75%',
    paddingRight: 16,
    marginBottom: 120,
  },
  forgotPasswordText: {
    color: purple,
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 16,
  },
  signupLink: {
    color: purple,
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 40,
  },
});

export default Login;
