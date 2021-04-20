import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { HStack } from '../../../components/atoms/HStack';
import { VStack } from '../../../components/atoms/VStack';
import { StackSpacer } from '../../../components/atoms/StackSpacer';
import { Typography } from '../../../components/atoms/Typography';
import { SignUpForm } from '../../../components/organisms/SignUpForm';
import { Box } from '../../../components/atoms/Box';
import { Button } from '../../../components/atoms/Button';

import { palette } from '../../../styles/color';
import { AuthStackParamList } from '../routes';

export type SignInProps = StackScreenProps<AuthStackParamList, 'SignUp'>;

export const SignUp = ({ navigation }: SignInProps) => (
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
          メンバー登録
        </Typography>
      </VStack>

      <Box>
        <SignUpForm />
      </Box>

      <Box>
        <Button
          label="ログイン画面へ戻る"
          w="100%"
          h="64px"
          onPress={() => navigation.navigate('SignIn')}
        />
      </Box>
    </VStack>
  </Box>
);
