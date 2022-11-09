import React from 'react';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Onboarding from './screens/onBoarding';
import Landingscreen from './screens/LandingScreen';
import Menu from './screens/Menu';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Landingscreen" component={Landingscreen} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}