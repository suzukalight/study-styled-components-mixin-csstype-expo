import React, { useCallback } from 'react';
import { VStack } from '../../atoms/VStack';

import { RadioItem } from './type';

import { RadioButton, RadioButtonCommonProps, RadioButtonStyled } from './RadioButton';

export type RadioGroupCommonProps<T = string> = RadioButtonCommonProps & {
  items: RadioItem<T>[];
};

export type RadioGroupProps<T = string> = RadioGroupCommonProps & {
  value: T;
};

export const RadioGroup = ({
  items,
  value,
  defaultValue,
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
