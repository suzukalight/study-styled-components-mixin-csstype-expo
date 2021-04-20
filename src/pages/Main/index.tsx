import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { HStack } from '../../components/atoms/HStack';
import { VStack } from '../../components/atoms/VStack';
import { StackSpacer } from '../../components/atoms/StackSpacer';
import { Typography } from '../../components/atoms/Typography';
import { palette } from '../../components/styles/color';
import { Box } from '../../components/atoms/Box';
import { Button } from '../../components/atoms/Button';

import { RootStackParamList } from '../Navigation';
import { Center } from '../../components/atoms/Box/Center';

type MainNavigationProps = StackNavigationProp<RootStackParamList, 'Main'>;
export type MainProps = {
  navigation: MainNavigationProps;
};

export const Main = ({ navigation }: MainProps) => (
  <Box w="100%" maxW="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
    <VStack spacing={4} h="100%" px={4} py={8} bgColor={palette.white}>
      <VStack spacing={4}>
        <HStack>
          <Typography fontSize="large">🍣🍕🍣🍕🍣</Typography>
          <StackSpacer />
          <Typography fontSize="large">🍣🍕🍣🍕🍣</Typography>
        </HStack>

        <Typography fontSize="xxx-large">🍕</Typography>

        <Typography color={palette.brown} fontSize="xx-large">
          メイン画面
        </Typography>
      </VStack>

      <Center>
        <Button label="メンバー登録" onPress={() => navigation.navigate('SignUp')} />
      </Center>
    </VStack>
  </Box>
);
