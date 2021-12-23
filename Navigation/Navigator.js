import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import React from 'react';

import {Dimensions} from 'react-native';

import HomeScreen from '../Screens/HomeScreen';
import GameEasy from '../Screens/GameEasy';
import GameMedium from '../Screens/GameMedium';
import GameHard from '../Screens/GameHard';
import LoadingScreen from '../Screens/LoadingScreen';
import GameLevels from '../Screens/GameLevels';

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  GameLevels: {
    screen: GameLevels,
    navigationOptions: {
      headerShown: false,
    },
  },
  GameEasy: {
    screen: GameEasy,
    navigationOptions: {
      headerShown: false,
    },
  },
  GameMedium: {
    screen: GameMedium,
    navigationOptions: {
      headerShown: false,
    },
  },
  GameHard: {
    screen: GameHard,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const MainNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'Loading',
  },
);

export default AppNavigator = createAppContainer(MainNavigator);
