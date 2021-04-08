import React, { ReactNode } from 'react';
import { FieldValues, Controller, DeepMap, FieldError } from 'react-hook-form';

import { RadioGroup, RadioGroupCommonProps } from './RadioGroup';
import { VStack } from '../../atoms/VStack';
import { Typography } from '../../atoms/Typography';

import { RhfProps } from '../type';
import { palette } from '../../styles/color';

export type RhfRadioGroupProps<T extends FieldValues> = RadioGroupCommonProps &
  RhfProps<T> & {
    label?: ReactNode;
  };

export const RhfRadioGroup = <T extends FieldValues>({
  control,
  name,
  rules,
  label,
  items,
  defaultValue,
  ...styles
}: RhfRadioGroupProps<T>) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    defaultValue={defaultValue}
    render={({ field: { onChange, onBlur, value }, formState: { errors } }) => (
      <VStack>
        {label && (
          <Typography w="100%" textAlign="left">
            {label}
          </Typography>
        )}

        <RadioGroup
          {...styles}
          items={items}
          value={value as string} // FIXME
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
