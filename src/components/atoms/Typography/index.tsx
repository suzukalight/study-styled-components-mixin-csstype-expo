import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { colorMixin, ColorProps } from '../../styles/color';
import { FontProps, fontMixin } from '../../styles/typography';

export type TypographyStyledProps = Partial<FontProps> & Partial<ColorProps>;

export const TypographyStyled = styled.Text`
  ${fontMixin}
  ${colorMixin}
`;

export type TypographyProps = TypographyStyledProps & {
  children?: ReactNode;
};

export const Typography = ({ children, ...styles }: TypographyProps) => (
  <TypographyStyled children={children} {...styles} />
);
