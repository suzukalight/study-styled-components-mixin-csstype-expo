import React from 'react';
import { TextInput as RnTextInput } from 'react-native';
import styled from 'styled-components/native';
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
  font-size: 1rem;
  line-height: 1.25rem;

  width: 100%;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.5rem 0.5rem;

  ${layoutMixin}
  ${spaceMixin}
  ${backgroundMixin}
  ${borderMixin}
  ${fontMixin}
  ${colorMixin}
`;

export type TextInputProps = TextInputStyledProps & {
  value?: any;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;
};

export const TextInput = ({ ...props }: TextInputProps) => {
  return <TextInputStyled {...props} />;
};
