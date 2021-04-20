import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { VStack } from '../../../components/atoms/VStack';
import { Typography } from '../../../components/atoms/Typography';
import { SignInForm } from '../../../components/organisms/SignInForm';
import { Box } from '../../../components/atoms/Box';
import { Button } from '../../../components/atoms/Button';

import { palette } from '../../../styles/color';
import { AuthStackParamList } from '../routes';

export type SignInProps = StackScreenProps<AuthStackParamList, 'SignIn'>;

export const SignIn = ({ navigation }: SignInProps) => (
  <Box w="100%" maxW="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
    <VStack
      spacing={4}
      h="100%"
      px={4}
      py={8}
      bgColor={palette.white}
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={4}>
        <Typography fontSize="xxx-large">🍕</Typography>

        <Typography color={palette.brown} fontSize="xx-large">
          ログイン
        </Typography>
      </VStack>

      <Box>
        <SignInForm />
      </Box>

      <Box>
        <Button label="新規登録" w="100%" h="64px" onPress={() => navigation.navigate('SignUp')} />
      </Box>
    </VStack>
  </Box>
);
