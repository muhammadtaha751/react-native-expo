import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screens/Dashboard';
import Account from '../screens/Account';
import Register from '../screens/Register';
import Services from '../screens/Services';
import Calendar from '../screens/Calendar';
import Statistics from '../screens/Statistics';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function MainNavigator(){
    return(
        <NavigationContainer>
           <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="Statistics" component={Statistics} />
    </Stack.Navigator>
      </NavigationContainer>
    )
}

