import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/Movies';
import MovieDetails from '../screens/MovieDetails';
import AboutScreen from '../screens/About';

const HomeStack = createStackNavigator({
  'Search': {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Search',
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
    },
  },
  'Movies': {
    screen: MoviesScreen,
    navigationOptions: {
      title: 'Movies',
      headerStyle: { backgroundColor: '#2b9130' },
      headerTintColor: '#fff',
    },
  },
  'Details': {
    screen: MovieDetails,
    navigationOptions: {
      headerStyle: { backgroundColor: '#db467c' },
      headerTintColor: '#fff',
    },
  },
});

HomeStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === 'Movies' || routeName === 'Details') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

const AboutStack = createStackNavigator({
  About: AboutScreen,
}, {
    initialRouteName: 'About',
    navigationOptions: { tabBarLabel: 'About' },
    defaultNavigationOptions: {
      title: 'About',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
    },
  });

export default createBottomTabNavigator({
  Search: HomeStack,
  About: AboutStack,
});

/*
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Movies: MoviesScreen,
    Details: MovieDetails,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: { tabBarLabel: 'Search' },
    defaultNavigationOptions: {
      title: 'Search',
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
    },
  });
*/