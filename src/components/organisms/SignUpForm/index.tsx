import React, { useCallback } from 'react';
import { GestureResponderEvent } from 'react-native';
import { useForm, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Box } from '../../atoms/Box';
import { VStack } from '../../atoms/VStack';
import { Button } from '../../atoms/Button';
import { RhfTextInput } from '../../forms/TextInput/Rhf';
import { RhfCheckbox } from '../../forms/Checkbox/Rhf';
import { RhfRadioGroup } from '../../forms/RadioGroup/Rhf';

import { RadioItem } from '../../forms/RadioGroup/type';

type FormData = {
  username: string;
  password: string;
  plan: string;
  agreement: boolean;
};

const schema = yup.object().shape({
  username: yup.string().required('ユーザ名は必須です'),
  password: yup.string().required('パスワードは必須です'),
  plan: yup.string().required('プランを選択してください'),
  agreement: yup.boolean().isTrue('利用規約に同意してください'),
});

const plans: RadioItem[] = [
  { value: 'free', title: 'フリープラン' },
  { value: 'professional', title: 'プロフェッショナルプラン' },
  { value: 'enterprise', title: '企業プラン' },
];

type SignUpFormPresenterProps = {
  control: Control<FormData>;
  disableSubmit: boolean;
  onPressSubmit: (event: GestureResponderEvent) => void;
};

export const SignUpFormPresenter = ({
  control,
  onPressSubmit,
  disableSubmit,
}: SignUpFormPresenterProps) => (
  <VStack spacing={4}>
    <Box>
      <RhfTextInput
        control={control}
        name="username"
        label="ユーザ名"
        keyboardType="email-address"
      />
    </Box>

    <Box>
      <RhfTextInput control={control} name="password" label="パスワード" secureTextEntry={true} />
    </Box>

    <Box>
      <RhfRadioGroup control={control} name="plan" label="プランを選択" items={plans} />
    </Box>

    <Box>
      <RhfCheckbox
        control={control}
        name="agreement"
        label="利用規約への同意"
        title="利用規約に同意します"
      />
    </Box>

    <Button
      primary
      w="100%"
      h="64px"
      label="送信"
      onPress={onPressSubmit}
      disabled={disableSubmit}
    />
  </VStack>
);

export const SignUpForm = () => {
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
    <SignUpFormPresenter
      control={control}
      disableSubmit={disableSubmit}
      onPressSubmit={onPressSubmit}
    />
  );
};
