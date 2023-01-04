import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Quiz from './screens/Quiz'
import Results from './screens/Results'
import Title from './Components/Title'
import { NavigationContainer } from '@react-navigation/native'
import  MyStack  from './Navigation'


const App = () => {
  return (
   
      
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 15,
  }
})