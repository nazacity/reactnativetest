import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './home/HomeScreen';
import LoginScreen from './auth/LoginScreen';
import ListViewScreen from './listview/ListView';

const HomeStack = createStackNavigator();

export const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="ListView"
        component={ListViewScreen}
        options={{
          title: '',
        }}
      />
    </HomeStack.Navigator>
  );
};
