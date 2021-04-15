import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as ReactNativeElementsThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { themeColors } from './src/components/styles/color';
import { SignUp } from './src/pages/SignUp';

export const App = () => (
  <SafeAreaProvider>
    <ReactNativeElementsThemeProvider>
      <StyledComponentsThemeProvider theme={themeColors}>
        <SignUp />
        <StatusBar style="auto" />
      </StyledComponentsThemeProvider>
    </ReactNativeElementsThemeProvider>
  </SafeAreaProvider>
);

export default App;
