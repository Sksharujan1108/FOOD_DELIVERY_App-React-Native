import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from '../HomeScreen'

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName = 'WelcomePage'>

      <Stack.Screen name="WelcomePage" component={WelcomeScreen} 
        options = {{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SignUp" component={SignupScreen} 
        options = {{
          headerShown: false,
        }}
      />
      <Stack.Screen name="LogIn" component={LoginScreen} 
        options = {{
          headerShown: false,
        }}
      />

       <Stack.Screen name="Home" component={HomeScreen} 
        options = {{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  )
}

export default AuthNavigation