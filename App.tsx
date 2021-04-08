import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as RnElementsThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HStack } from './src/components/atoms/HStack';
import { VStack } from './src/components/atoms/VStack';
import { StackSpacer } from './src/components/atoms/StackSpacer';
import { Button } from './src/components/atoms/Button';
import { Typography } from './src/components/atoms/Typography';
import { palette, themeColors } from './src/components/styles/color';
import { FormSample } from './src/components/FormSample';
import { Box } from './src/components/atoms/Box';

export default function App() {
  return (
    <SafeAreaProvider>
      <RnElementsThemeProvider>
        <StyledComponentsThemeProvider theme={themeColors}>
          <View style={styles.container}>
            <VStack spacing={4} w="100%" h="100%" px={4} py={8} bgColor={palette.white}>
              <HStack w="100%">
                <Typography>🍣🍕🍣</Typography>
                <StackSpacer />
                <Typography fontSize="xx-large">🍣🍕🍣</Typography>
              </HStack>

              <Typography fontSize="xxx-large">🍕</Typography>

              <Typography color={palette.brown} textDecoration="underline">
                Typographyでマークアップした文章マークアップした文章Typographyでマークアップした文章Typographyでマークアップした文章マークアップした文章Typographyでマークアップした文章Typographyでマークアップした文章マークアップした文章Typographyでマークアップした文章Typographyでマークアップした文章マークアップした文章Typographyでマークアップした文章
              </Typography>

              <StackSpacer />

              <Box w="100%">
                <FormSample />
              </Box>

              <Button label="primary button" primary onPress={() => console.log('pressed')} />
              <Button label="DANGER!!!" danger onPress={() => console.log('pressed')} />
            </VStack>

            <StatusBar style="auto" />
          </View>
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
