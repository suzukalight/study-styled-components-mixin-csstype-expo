import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as ReactNativeElementsThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';

import { themeColors } from './src/styles/color';
import { Navigation } from './src/pages/Navigation';
import { store } from './src/logics/store/store';

export const App = () => (
  <SafeAreaProvider>
    <ReactNativeElementsThemeProvider>
      <StyledComponentsThemeProvider theme={themeColors}>
        <ReduxProvider store={store}>
          <Navigation />
          <StatusBar style="auto" />
        </ReduxProvider>
      </StyledComponentsThemeProvider>
    </ReactNativeElementsThemeProvider>
  </SafeAreaProvider>
);

export default App;
