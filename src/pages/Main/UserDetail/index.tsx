import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
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
import { selectUser } from '../../../logics/selectors/auth/user';

export type UserDetailPresenterProps = {
  userId: string;
  onPressToMain: () => void;
};

export const UserDetailPresenter = ({ userId, onPressToMain }: UserDetailPresenterProps) => (
  <Box w="100%" maxW="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
    <VStack spacing={4} h="100%" px={4} py={8} bgColor={palette.white}>
      <VStack spacing={4}>
        <HStack>
          <Typography fontSize="large">π£ππ£ππ£</Typography>
          <StackSpacer />
          <Typography fontSize="large">π£ππ£ππ£</Typography>
        </HStack>

        <Typography fontSize="xxx-large">π</Typography>

        <Typography color={palette.brown} fontSize="xx-large">
          {`γ¦γΌγΆη»ι’ id=${userId}`}
        </Typography>
      </VStack>

      <Center>
        <Button label="γ‘γ€γ³η»ι’γΈζ»γ" onPress={onPressToMain} />
      </Center>
    </VStack>
  </Box>
);

export type UserDetailProps = StackScreenProps<MainTabParamList, 'UserDetail'>;

export const UserDetail = ({ navigation, route }: UserDetailProps) => {
  const handlePressToMain = useCallback(() => navigation.navigate('Home'), [navigation]);
  const user = useSelector(selectUser);

  if (!user) return null;

  return <UserDetailPresenter userId={user.id} onPressToMain={handlePressToMain} />;
};
