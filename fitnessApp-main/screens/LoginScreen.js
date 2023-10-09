import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Background from './Background2';
import { purple } from './Constants';
import Field from './Field';
import Btn from './Btn';
import React, {useState} from 'react'
// import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native'
import { connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const LoginScreen = (props) => {
  const navigation = useNavigation();
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
          setValidationError('Login error : ',err.message);
      }
    }
    else {
      setValidationError('Please fill out all fields.');
    }
  } 

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.loginDescription}>Login to your account</Text>
          <Field placeholder="Email" keyboardType={'email-address'} value={email} onChangeText={value => setEmail(value)} />
          <Field placeholder="Password" secureTextEntry={true} value={password} onChangeText={value=>setPassword(value)} />
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => {
              alert('Forgot Password?');
            }}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
          </TouchableOpacity>
          <Text style={styles.errorText}>
              {validationError ? {validationError} : null}
          </Text>
          <Btn
            textColor="white"
            bgColor={purple}
            btnLabel="Login"
            Press={handleSubmit}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.signupLink}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    height: 720,
    width: 412,
    left: 0,
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
    marginBottom: 30,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    width: '75%',
    paddingRight: 16,
    marginBottom: 80,
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

export default LoginScreen