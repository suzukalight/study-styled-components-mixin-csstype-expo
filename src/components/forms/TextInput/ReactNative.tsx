import React from 'react';
import { FieldValues, Controller } from 'react-hook-form';

import { RhfProps } from '../type';
import { TextInput, TextInputStyledProps } from './TextInput';

export type RhfTextInputProps<T extends FieldValues> = TextInputStyledProps & RhfProps<T>;

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
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          {...styles}
          value={value}
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
        />
      )}
    />
  );
};
