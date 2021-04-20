import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as ReactNativeElementsThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { themeColors } from './src/components/styles/color';
import { Navigation } from './src/pages/Navigation';

export const App = () => (
  <SafeAreaProvider>
    <ReactNativeElementsThemeProvider>
      <StyledComponentsThemeProvider theme={themeColors}>
        <Navigation />
        <StatusBar style="auto" />
      </StyledComponentsThemeProvider>
    </ReactNativeElementsThemeProvider>
  </SafeAreaProvider>
);

export default App;
