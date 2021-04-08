import React, { ReactNode } from 'react';
import { TextInput as RnTextInput } from 'react-native';
import styled from 'styled-components/native';

import { Typography } from '../../atoms/Typography';
import { VStack } from '../../atoms/VStack';

import { backgroundMixin, BackgroundProps } from '../../styles/background';
import { borderMixin, BorderProps } from '../../styles/border';
import { colorMixin, ColorProps } from '../../styles/color';
import { layoutMixin, LayoutProps } from '../../styles/layout';
import { spaceMixin, SpaceProps } from '../../styles/space';
import { FontProps, fontMixin } from '../../styles/typography';

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
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 24px 12px;

  ${layoutMixin}
  ${spaceMixin}
  ${backgroundMixin}
  ${borderMixin}
  ${fontMixin}
  ${colorMixin}
`;

export type TextInputProps = TextInputStyledProps & {
  label?: ReactNode;
  value?: any;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;
};

export const TextInput = ({ label, ...props }: TextInputProps) => {
  return (
    <VStack w="100%">
      {label && (
        <Typography w="100%" textAlign="left">
          {label}
        </Typography>
      )}
      <TextInputStyled {...props} />
    </VStack>
  );
};
