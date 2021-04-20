import React, { useContext } from 'react';
import { RouteProp } from '@react-navigation/core';
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { ThemeContext } from 'styled-components';

import { Home } from './Home';
import { UserDetail } from './UserDetail';

import { MainTabParamList } from './routes';
import { palette, ThemeColors } from '../../styles/color';

const tabIconNames: Record<keyof MainTabParamList, string> = {
  Home: 'home',
  UserDetail: 'user',
};
const getScreenOptions = (route: RouteProp<MainTabParamList, keyof MainTabParamList>) =>
  ({
    tabBarIcon: ({ color, size }) => (
      <Feather name={tabIconNames[route.name]} size={size} color={color} />
    ),
  } as BottomTabNavigationOptions);

const Tab = createBottomTabNavigator<MainTabParamList>();

export const Main = () => {
  const theme = useContext<ThemeColors>(ThemeContext);
  const tabBarOptions: BottomTabBarOptions = {
    activeTintColor: theme.secondary,
    inactiveTintColor: palette.gray,
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => getScreenOptions(route)}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="UserDetail" component={UserDetail} initialParams={{ id: '42' }} />
    </Tab.Navigator>
  );
};
