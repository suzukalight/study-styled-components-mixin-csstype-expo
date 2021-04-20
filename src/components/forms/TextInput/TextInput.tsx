import React, { ReactNode } from 'react';
import { KeyboardType, TextInput as RnTextInput } from 'react-native';
import styled from 'styled-components/native';

import { FormLabel } from '../FormLabel';
import { VStack } from '../../atoms/VStack';

import { backgroundMixin, BackgroundProps } from '../../../styles/background';
import { borderMixin, BorderProps } from '../../../styles/border';
import { colorMixin, ColorProps } from '../../../styles/color';
import { layoutMixin, LayoutProps } from '../../../styles/layout';
import { spaceMixin, SpaceProps } from '../../../styles/space';
import { FontProps, fontMixin } from '../../../styles/typography';

export type TextInputStyledProps = Partial<Omit<FontProps, 'textAlign'>> &
  Partial<ColorProps> &
  Partial<BorderProps> &
  Partial<BackgroundProps> &
  Partial<SpaceProps> &
  Partial<LayoutProps>;

export const TextInputStyled = styled(RnTextInput)`
  font-size: 16px;
  line-height: 20px;

  width: 100%;
  height: 44px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;

  ${layoutMixin}
  ${spaceMixin}
  ${backgroundMixin}
  ${borderMixin}
  ${fontMixin}
  ${colorMixin}
`;

type RnTextInputProps = {
  required?: boolean;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
};

export type TextInputProps = TextInputStyledProps &
  RnTextInputProps & {
    label?: ReactNode;
    value?: any;
    onBlur?: () => void;
    onChangeText?: (text: string) => void;
  };

export const TextInput = ({ label, required, ...props }: TextInputProps) => {
  return (
    <VStack>
      <FormLabel label={label} required={required} />
      <TextInputStyled {...props} />
    </VStack>
  );
};
