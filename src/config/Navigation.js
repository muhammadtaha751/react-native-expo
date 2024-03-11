import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screens/Dashboard';
import Account from '../screens/Account';
import Register from '../screens/Register';
import Services from '../screens/Services';
import Calendar from '../screens/Calendar';
import Statistics from '../screens/Statistics';
import Business from '../screens/Business';
import Notification from '../screens/Notification';
import Subscription from '../screens/Subscription';
import Sign from '../screens/Sign';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
    
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <Dashboard {...props} />}
      screenOptions={{
        activeTintColor: '#f4511e',
        itemStyle: { marginVertical: 10 },
      }}>
        
         <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Statistics" component={Statistics} />
      <Drawer.Screen name="Business" component={Business} />
      <Drawer.Screen name="Subscription" component={Subscription} />

    </Drawer.Navigator>
  );
};

const AppNavigator = ({ toggleLogin }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" options={{ headerShown: false }}>
        {props => <Register {...props} toggleLogin={toggleLogin} />}
      </Stack.Screen>
      <Stack.Screen name="Sign" options={{ headerShown: false }}>
        {props => <Sign {...props} toggleLogin={toggleLogin} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainDrawerNavigator /> : <AppNavigator toggleLogin={toggleLogin} />}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'black',
    width: 900,
    color: 'black'
  },
  container: {
    backgroundColor: 'black'
  }
})


