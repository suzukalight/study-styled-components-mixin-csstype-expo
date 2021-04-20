import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignUp } from './SignUp';
import { Main } from './Main';

export type RootStackParamList = {
  Main: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} options={{ title: 'メイン画面' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'メンバー登録' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
