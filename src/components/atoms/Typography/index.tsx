import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

import { backgroundMixin, BackgroundProps } from '../../../styles/background';
import { borderMixin, BorderProps } from '../../../styles/border';
import { colorMixin, ColorProps } from '../../../styles/color';
import { layoutMixin, LayoutProps } from '../../../styles/layout';
import { spaceMixin, SpaceProps } from '../../../styles/space';
import { FontProps, fontMixin } from '../../../styles/typography';

export type TypographyStyledProps = Partial<FontProps> &
  Partial<ColorProps> &
  Partial<BorderProps> &
  Partial<BackgroundProps> &
  Partial<SpaceProps> &
  Partial<LayoutProps>;

export const TypographyStyled = styled.Text`
  ${layoutMixin}
  ${spaceMixin}
  ${backgroundMixin}
  ${borderMixin}
  ${fontMixin}
  ${colorMixin}
`;

export type TypographyProps = TypographyStyledProps & {
  children?: ReactNode;
};

export const Typography = ({ children, ...styles }: TypographyProps) => (
  <TypographyStyled children={children} {...styles} />
);
