import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import { HStack } from "./src/components/atoms/HStack";
import { VStack } from "./src/components/atoms/VStack";
import { StackSpacer } from "./src/components/atoms/StackSpacer";
import { Button } from "./src/components/atoms/Button";
import { Typography } from "./src/components/atoms/Typography";
import { themeColors } from "./src/components/styles/color";

export default function App() {
  return (
    <ThemeProvider theme={themeColors}>
      <View style={styles.container}>
        <VStack>
          <HStack maxW="100vw" w="100vw">
            <VStack>
              <Typography>🍣</Typography>
              <Typography>🍕</Typography>
            </VStack>
          </HStack>

          <HStack maxW="100vw" w="100vw">
            <Typography fontSize="x-large">🍣🍣🍣</Typography>
            <StackSpacer />
            <Typography fontSize="xxx-large">🍕</Typography>
          </HStack>

          <Typography>
            Typographyでマークアップした文章マークアップした文章Typographyでマークアップした文章
          </Typography>

          <Button title="ボタン" onPress={() => console.log("pressed")} />

          <StatusBar style="auto" />
        </VStack>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafaff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "100vw",
    height: "100%",
  },
});
