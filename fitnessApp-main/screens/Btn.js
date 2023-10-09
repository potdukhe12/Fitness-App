import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { purple } from './Constants'

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
        onPress={Press}
        style={{
            backgroundColor: bgColor,
            borderColor: purple,
            borderWidth: 0.2,
            borderRadius: 100,
            alignItems: 'center',
            width: '85%',
            paddingVertical: 5,
            marginBottom: 13,
        }}>

        <Text style={{ color: textColor, 
              fontSize: 28, 
              fontWeight: 'bold' }}>
          {btnLabel}
        </Text>

    </TouchableOpacity>
  )
}