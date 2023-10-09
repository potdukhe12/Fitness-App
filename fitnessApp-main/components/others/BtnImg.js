import { Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function BtnImg({ bgColor, btnLabel, textColor, Press, imgLoc }) {
  return (
    <TouchableOpacity
        onPress={Press}
        style={{
            backgroundColor: bgColor,
            borderWidth: 0.1,
            borderRadius: 20,
            alignItems: 'flex-start',
            width: '110%',
            paddingVertical: 35,
            paddingHorizontal: 25,
            marginBottom: 13,
        }}>

        <Text style={{ color: textColor, 
              fontSize: 28, 
              fontWeight: 'bold' }}>
          {btnLabel}
        </Text>
        <Image style={{width:50,height:50}} source={require(imgLoc)} />

    </TouchableOpacity>
  )
}