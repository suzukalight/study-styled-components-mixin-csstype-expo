import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as RnElementsThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { themeColors } from './src/components/styles/color';
import { SignUp } from './src/pages/SignUp';

export default function App() {
  return (
    <SafeAreaProvider>
      <RnElementsThemeProvider>
        <StyledComponentsThemeProvider theme={themeColors}>
          <SignUp />
          <StatusBar style="auto" />
        </StyledComponentsThemeProvider>
      </RnElementsThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
  },
});
