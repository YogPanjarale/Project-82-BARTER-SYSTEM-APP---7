import React from 'react';
import { Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import BookDonateScreen from '../screens/DonateScreen';
import HomeScreen from '../screens/HomeScreen'
import ExchangeScreen from '../screens/ExchangeScreen'
// import { AppStackNavigator } from './StackNavigator'


export const TabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Icon name={'home'}/>,
      tabBarLabel : "Home",
    }
  },
  ExchangeScreen:{
      screen:ExchangeScreen,
      navigationOptions :{
        tabBarIcon : <Icon name={'cached'}/>,
        tabBarLabel : "Exchange",
      }
  }
}
  );