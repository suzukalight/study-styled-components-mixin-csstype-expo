import React from 'react';
import { FieldValues, Controller, DeepMap, FieldError } from 'react-hook-form';

import { TextInput, TextInputProps } from './TextInput';
import { VStack } from '../../atoms/VStack';
import { Typography } from '../../atoms/Typography';

import { RhfProps } from '../type';
import { palette } from '../../styles/color';

export type RhfTextInputProps<T extends FieldValues> = TextInputProps & RhfProps<T>;

export const RhfTextInput = <T extends FieldValues>({
  control,
  name,
  rules,
  defaultValue,
  ...styles
}: RhfTextInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value }, formState: { errors } }) => (
        <VStack w="100%">
          <TextInput
            {...styles}
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
          {errors[name] && (
            <Typography w="100%" textAlign="left" color={palette.red}>
              {(errors[name] as DeepMap<FieldValues, FieldError>)?.message}
            </Typography>
          )}
        </VStack>
      )}
    />
  );
};
