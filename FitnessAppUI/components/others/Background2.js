import React from 'react'
import { View, ImageBackground } from 'react-native'

const Background2 = ({ children }) => {
  return (
    <View>
        <ImageBackground source={require("../images/bg3_3.jpg")}
                       style={{ height: '100%' }} />
        <View style={{ position: 'absolute' }}>
            {children}
        </View>
    </View>
  )
}

export default Background2;