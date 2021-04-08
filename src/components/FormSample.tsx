import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { VStack } from './atoms/VStack';
import { Button } from './atoms/Button';
import { RhfTextInput } from './forms/TextInput/Rhf';
import { RhfCheckbox } from './forms/Checkbox/Rhf';
import { Box } from './atoms/Box';

type FormData = {
  username: string;
  password: string;
  agreement: boolean;
};

const schema = yup.object().shape({
  username: yup.string().required('ユーザ名は必須です'),
  password: yup.string().required('パスワードは必須です'),
  agreement: yup.boolean().isTrue('利用規約に同意してください'),
});

export const FormSample = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { agreement: false },
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <VStack spacing={4}>
      <Box>
        <RhfTextInput control={control} name="username" label="ユーザ名" />
      </Box>

      <Box>
        <RhfTextInput control={control} name="password" label="パスワード" />
      </Box>

      <Box>
        <RhfCheckbox control={control} name="agreement" title="利用規約に同意する" />
      </Box>

      <Button label="送信" onPress={handleSubmit(onSubmit)} w="100%" h="64px" />
    </VStack>
  );
};
