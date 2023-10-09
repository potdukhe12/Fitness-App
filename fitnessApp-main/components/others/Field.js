import { TextInput } from 'react-native'
import React from 'react'
import { purple } from './Constants'

const Field = props => {
  return (
    <TextInput
        {...props}
        style={{ borderRadius: 100,
                 color: purple,
                 fontSize: 18,
                 paddingHorizontal: 25,
                 width: '75%',
                 backgroundColor: 'rgb(220,220,220)',
                 marginVertical: 8 }}
        placeholderTextColor={purple} />
  )
}

export default Field;