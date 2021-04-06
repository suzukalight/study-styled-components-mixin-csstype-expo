import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { HStack } from './src/components/atoms/HStack';
import { VStack } from './src/components/atoms/VStack';
import { StackSpacer } from './src/components/atoms/StackSpacer';
import { Button } from './src/components/atoms/Button';
import { Typography } from './src/components/atoms/Typography';
import { palette, themeColors } from './src/components/styles/color';

export default function App() {
  return (
    <ThemeProvider theme={themeColors}>
      <View style={styles.container}>
        <VStack spacing={4} w="100vw" h="100vh" px={4} py={8} bgColor={palette.white}>
          <HStack w="100%">
            <Typography>🍣🍕🍣</Typography>
            <StackSpacer />
            <Typography fontSize="xx-large">🍣🍕🍣</Typography>
          </HStack>

          <Typography fontSize="xxx-large">🍕</Typography>

          <Typography color={palette.brown} textDecoration="underline">
            Typographyでマークアップした文章マークアップした文章Typographyでマークアップした文章
          </Typography>

          <StackSpacer />

          <Button label="ボタン" onPress={() => console.log('pressed')} />
          <Button label="primary button" primary onPress={() => console.log('pressed')} />
          <Button label="DANGER!!!" danger onPress={() => console.log('pressed')} />
        </VStack>

        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '100vw',
    height: '100%',
  },
});
