import React, { useCallback } from 'react';
import { GestureResponderEvent } from 'react-native';
import { useForm, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Box } from '../../atoms/Box';
import { VStack } from '../../atoms/VStack';
import { Button } from '../../atoms/Button';
import { RhfTextInput } from '../../forms/TextInput/Rhf';

type FormData = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().required('ユーザ名は必須です'),
  password: yup.string().required('パスワードは必須です'),
});

type SignInFormPresenterProps = {
  control: Control<FormData>;
  disableSubmit: boolean;
  onPressSubmit: (event: GestureResponderEvent) => void;
};

export const SignInFormPresenter = ({
  control,
  onPressSubmit,
  disableSubmit,
}: SignInFormPresenterProps) => (
  <VStack spacing={4}>
    <Box>
      <RhfTextInput
        control={control}
        name="username"
        label="ユーザ名"
        required
        keyboardType="email-address"
      />
    </Box>

    <Box>
      <RhfTextInput
        control={control}
        name="password"
        label="パスワード"
        required
        secureTextEntry={true}
      />
    </Box>

    <Button
      primary
      w="100%"
      h="64px"
      label="ログイン"
      onPress={onPressSubmit}
      disabled={disableSubmit}
    />
  </VStack>
);

export const SignInForm = () => {
  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { agreement: false } as Partial<FormData>,
    mode: 'onChange', // FIXME: パフォーマンス的に良くないとのこと
  });

  const onSubmit = useCallback((data: FormData) => console.log(data), []);

  const onPressSubmit = handleSubmit(onSubmit);
  const disableSubmit = isDirty && !isValid;

  return (
    <SignInFormPresenter
      control={control}
      disableSubmit={disableSubmit}
      onPressSubmit={onPressSubmit}
    />
  );
};