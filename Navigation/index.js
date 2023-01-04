import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Results from '../screens/Results';
import Quiz from '../screens/Quiz';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}
export default MyStack;