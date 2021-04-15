import React, { ReactNode, useCallback } from 'react';
import { VStack } from '../../atoms/VStack';

import { RadioItem } from './type';

import { RadioButton, RadioButtonCommonProps, RadioButtonStyled } from './RadioButton';
import { FormLabel } from '../FormLabel';

export type RadioGroupCommonProps<T = string> = RadioButtonCommonProps & {
  items: RadioItem<T>[];
};

export type RadioGroupProps<T = string> = RadioGroupCommonProps & {
  label?: ReactNode;
  required?: boolean;
  value: T;
};

export const RadioGroup = ({
  items,
  value,
  defaultValue,
  label,
  required,
  onChange,
  ...buttonProps
}: RadioGroupProps) => {
  const handleChangeSelectedItem = useCallback(
    (selectedItem: string) => {
      const newValue = selectedItem;
      if (onChange) onChange(newValue);
    },
    [onChange],
  );

  return (
    <VStack>
      <FormLabel label={label} required={required} />

      <RadioButtonStyled w="100%" display="flex" flexDirection="column" justifyContent="flex-start">
        {items.map((item) => (
          <RadioButton
            key={item.value}
            item={item}
            value={value}
            onChangeSelectedItem={handleChangeSelectedItem}
            {...buttonProps}
          />
        ))}
      </RadioButtonStyled>
    </VStack>
  );
};
