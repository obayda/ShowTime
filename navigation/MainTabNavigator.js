import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/About';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Search',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
    },
  });

HomeStack.navigationOptions = {
  tabBarLabel: 'Search',
};

const AboutStack = createStackNavigator({
  About: AboutScreen,
}, {
    initialRouteName: 'About',
    defaultNavigationOptions: {
      title: 'About',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
    },
  });

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
};


export default createBottomTabNavigator({
  HomeStack,
  AboutStack
});
