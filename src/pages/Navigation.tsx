import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';

import { SignUp } from './SignUp';
import { Main } from './Main';
import { UserDetail } from './UserDetail';

import { RootStackParamList } from './routes';
import { palette, ThemeColors } from '../components/styles/color';

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const theme = useContext<ThemeColors>(ThemeContext);
  const screenOptions: StackNavigationOptions = {
    headerStyle: {
      backgroundColor: theme.secondary,
    },
    headerTintColor: palette.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={screenOptions}>
        <Stack.Screen name="Main" component={Main} options={{ title: 'メイン画面' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'メンバー登録' }} />
        <Stack.Screen name="UserDetail" component={UserDetail} options={{ title: 'ユーザ画面' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
