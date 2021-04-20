import React, { useCallback } from 'react';
import { CheckBox as RneCheckBox } from 'react-native-elements';
import styled from 'styled-components/native';

import { RadioItem } from './type';

import { Box } from '../../atoms/Box';

import { backgroundMixin, BackgroundProps } from '../../../styles/background';
import { borderMixin, BorderProps } from '../../../styles/border';
import { colorMixin, ColorProps } from '../../../styles/color';
import { layoutMixin, LayoutProps } from '../../../styles/layout';
import { spaceMixin, SpaceProps } from '../../../styles/space';
import { FontProps, fontMixin } from '../../../styles/typography';

export type RadioButtonStyledProps = Partial<Omit<FontProps, 'textAlign'>> &
  Partial<ColorProps> &
  Partial<BorderProps> &
  Partial<BackgroundProps> &
  Partial<SpaceProps> &
  Partial<LayoutProps>;

export const RadioButtonStyled = styled(Box)`
  padding: 8px 0;

  ${layoutMixin}
  ${spaceMixin}
  ${backgroundMixin}
  ${borderMixin}
  ${fontMixin}
  ${colorMixin}
`;

export type RadioButtonCommonProps = RadioButtonStyledProps & {
  defaultValue?: boolean;
  onBlur?: () => void;
  onChange?: (...event: any[]) => void;
};

export type RadioButtonProps<T = string> = RadioButtonCommonProps & {
  item: RadioItem<T>;
  value: T;
  onChangeSelectedItem: (value: T) => void;
};

export const RadioButton = ({ item, value, onChangeSelectedItem, ...props }: RadioButtonProps) => {
  const handleChange = useCallback(() => {
    onChangeSelectedItem(item.value);
  }, [item, onChangeSelectedItem]);

  return (
    <RadioButtonStyled w="100%" display="flex" flexDirection="column" justifyContent="flex-start">
      <RneCheckBox
        {...props}
        containerStyle={{
          backgroundColor: 'transparent',
          borderWidth: 0,
          padding: 0,
          margin: 0,
          marginLeft: 0,
          marginRight: 0,
        }}
        title={item.title}
        checked={item.value === value}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onIconPress={handleChange}
        onPress={handleChange}
      />
    </RadioButtonStyled>
  );
};
