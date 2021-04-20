import React, { ReactNode } from 'react';
import { FieldValues, Controller, DeepMap, FieldError } from 'react-hook-form';

import { Checkbox, CheckboxCommonProps } from './Checkbox';
import { VStack } from '../../atoms/VStack';
import { Typography } from '../../atoms/Typography';

import { RhfProps } from '../type';
import { palette } from '../../../styles/color';

export type RhfCheckboxProps<T extends FieldValues> = CheckboxCommonProps &
  RhfProps<T> & {
    label?: ReactNode;
    required?: boolean;
  };

export const RhfCheckbox = <T extends FieldValues>({
  control,
  name,
  rules,
  defaultValue,
  ...props
}: RhfCheckboxProps<T>) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    defaultValue={defaultValue}
    render={({ field: { onChange, onBlur, value }, formState: { errors } }) => (
      <VStack>
        <Checkbox
          {...props}
          value={value as boolean}
          defaultValue={defaultValue}
          onBlur={onBlur}
          onChange={onChange}
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
