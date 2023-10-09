import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import HomeScreen from './components/pages/HomeScreen';
import { StatusBar } from 'react-native';
import ModeScreen from './components/pages/ModeScreen';
import GenderScreen from './components/pages/GenderScreen';
import Settings from './components/Settings';
import WeekScreen from './components/pages/WeekScreen';
import ExerciseScreen from './components/pages/ExerciseScreen';
import ExerciseDetail from './components/pages/ExerciseDetail';
import BMICalculator from './components/BMICalculator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar backgroundColor='#f0aea5' /> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="BMICalculator" component={BMICalculator} />
          <Stack.Screen name="GenderScreen" component={GenderScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ModeScreen" component={ModeScreen} />
          <Stack.Screen name="WeekScreen" component={WeekScreen} />
          <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
          <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
