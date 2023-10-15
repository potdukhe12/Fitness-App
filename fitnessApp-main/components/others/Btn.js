import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component
import { purple, white } from './Constants';

export default function Btn({ btnLabel, textColor, Press }) {
  
  const gradientColors = textColor === white ? ['#611F33', '#BB5575', '#953553'] : ['#D6D6D6', '#FFFFFF', '#F1F1F1'];

  return (
    <TouchableOpacity onPress={Press}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 100,
          overflow: 'hidden', // Hide the gradient overflow
          elevation: 5, // Add shadow
          marginBottom: 13,
          width: Dimensions.get('window').width * 0.5,
          paddingVertical: 5,
          alignItems: 'center',
        }}
      >
        <View>
          <Text
            style={{
              color: textColor,
              fontSize: 28,
              fontWeight: 'bold',
            }}
          >
            {btnLabel}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
