
import React from 'react'
import AppNavigation from './navigation/AppNavigation'
import { StatusBar } from 'react-native'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor='#EBB3A6' /> 
      <AppNavigation/>
    </>
  )
}

export default App