import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function BtnMenu({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
        onPress={Press}
        style={{
            backgroundColor: bgColor,
            // borderWidth: 0.1,
            borderRadius: 20,
            alignItems: 'center',
            width: '100%',
            paddingVertical: 20,
            paddingHorizontal: 25,
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