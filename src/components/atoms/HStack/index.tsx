import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

import { LayoutProps, layoutMixin } from '../../styles/layout';
import { sp, SpaceProps, Space, spaceMixin } from '../../styles/space';
import { ColorProps } from '../../styles/color';
import { BackgroundProps, backgroundMixin } from '../../styles/background';

export type HStackStyledProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<ColorProps> &
  Partial<BackgroundProps>;

export const HStackStyled = styled.View<HStackStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  ${layoutMixin}
  ${spaceMixin}
  ${backgroundMixin}
`;

export type HStackProps = HStackStyledProps & {
  children?: ReactNode;
  spacing?: Space;
};

export const HStack = ({ children, spacing, ...styles }: HStackProps) => {
  const childrenWithProps = spacing
    ? React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { style: { marginTop: sp(spacing) } });
      })
    : children;

  return <HStackStyled children={childrenWithProps} {...styles} />;
};
