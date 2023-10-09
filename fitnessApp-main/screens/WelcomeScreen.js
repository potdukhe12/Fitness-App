import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import Background from './background/Background';
import { purple } from './Constants';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground source={require("./images/bg3_3.jpg")}
                       style={{ height: '100%' }} >
        {/* <View style={{ position: 'absolute' }}> */}
        {/* <Background className="flex-1"> */}
        <View className="flex-1 flex justify-around my-4">
          <Text
            className=" text-gray-700 font-bold text-4xl text-center">
            Fitness App
          </Text>
          <View className="flex-row justify-center">
            <Image source={require("./images/logo1.png")}
              style={{ width: 350, height: 350, borderRadius:100/2 }}
              
              />
          </View>
          <View className="space-y-4">
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              className="py-3 mx-7 rounded-xl"
              style={{ backgroundColor: purple }}
            >
              <Text
                className="text-xl font-bold text-center text-white"
              >
                Sign Up
              </Text>
            </TouchableOpacity>
            <View className="flex-row justify-center">
              <Text 
              className=" text-gray-600 font-semibold"
              // style={{ color: themeColors.tx }}
              >
                Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text className="font-bold  text-gray-900"
                 style={{ fontSize:14 }}
                > Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </Background> */}
        </ImageBackground>
        {/* </View> */}
    </SafeAreaView>
  )
}

export default WelcomeScreen