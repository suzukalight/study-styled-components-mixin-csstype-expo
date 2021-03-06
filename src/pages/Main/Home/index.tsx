import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { HStack } from '../../../components/atoms/HStack';
import { VStack } from '../../../components/atoms/VStack';
import { StackSpacer } from '../../../components/atoms/StackSpacer';
import { Typography } from '../../../components/atoms/Typography';
import { Box } from '../../../components/atoms/Box';
import { Button } from '../../../components/atoms/Button';
import { Center } from '../../../components/atoms/Box/Center';

import { palette } from '../../../styles/color';
import { MainTabParamList } from '../routes';
import { RootStackParamList } from '../../routes';

export type HomeProps = StackScreenProps<MainTabParamList & RootStackParamList, 'Home'>;

export const Home = ({ navigation }: HomeProps) => (
  <Box w="100%" maxW="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
    <VStack spacing={4} h="100%" px={4} py={8} bgColor={palette.white}>
      <VStack spacing={4}>
        <HStack>
          <Typography fontSize="large">๐ฃ๐๐ฃ๐๐ฃ</Typography>
          <StackSpacer />
          <Typography fontSize="large">๐ฃ๐๐ฃ๐๐ฃ</Typography>
        </HStack>

        <Typography fontSize="xxx-large">๐</Typography>

        <Typography color={palette.brown} fontSize="xx-large">
          ใกใคใณ็ป้ข
        </Typography>
      </VStack>

      <Center>
        <VStack spacing={4}>
          <Button
            label="ใญใฐใขใฆใ"
            onPress={() => navigation.navigate('Auth', { screen: 'SignIn' })}
          />
        </VStack>
      </Center>
    </VStack>
  </Box>
);
