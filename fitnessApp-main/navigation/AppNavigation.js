import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useAuth from '../hooks/useAuth'

import WelcomeScreen from '../components/WelcomeScreen'
import Login from '../components/Login'
import Signup from '../components/Signup'

import GenderScreen from '../components/pages/GenderScreen'
import HomeScreen from '../components/pages/HomeScreen'
import Settings from '../components/Settings'
import BMICalculator from '../components/BMICalculator'
import ModeScreen from '../components/pages/ModeScreen'
import WeekScreen from '../components/pages/WeekScreen'
import ExerciseScreen from '../components/pages/ExerciseScreen'
import ExerciseDetail from '../components/pages/ExerciseDetail'

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

  const {user} = useAuth();
  if(user){
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName='GenderScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GenderScreen" component={GenderScreen} />
          {/* <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Gender" component={Gender} /> */}

          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="BMICalculator" component={BMICalculator} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ModeScreen" component={ModeScreen} />
          <Stack.Screen name="WeekScreen" component={WeekScreen} />
          <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
          <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />

      </Stack.Navigator>
  </NavigationContainer>
    )
  }else{
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={Signup} />
      </Stack.Navigator>
  </NavigationContainer>
    )
  }
}

export default AppNavigation