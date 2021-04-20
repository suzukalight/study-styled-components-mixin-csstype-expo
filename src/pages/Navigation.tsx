import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Auth } from './Auth';
import { Main } from './Main';

import { RootStackParamList } from './routes';

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} options={{ title: 'メイン画面' }} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  </NavigationContainer>
);
