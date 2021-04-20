import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignUp } from './SignUp';
import { SignIn } from './SignIn';

import { AuthStackParamList } from './routes';

const Stack = createStackNavigator<AuthStackParamList>();

export const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
