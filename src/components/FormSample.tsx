import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { VStack } from './atoms/VStack';
import { Button } from './atoms/Button';
import { RhfTextInput } from './forms/TextInput/ReactNative';

type FormData = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const FormSample = () => {
  const { control, handleSubmit } = useForm<FormData>({ resolver: yupResolver(schema) });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <VStack spacing={4} w="100%">
      <RhfTextInput control={control} name="username" label="ユーザ名" />
      <RhfTextInput control={control} name="password" label="パスワード" />

      <Button label="送信" onPress={handleSubmit(onSubmit)} w="100%" h="64px" />
    </VStack>
  );
};
