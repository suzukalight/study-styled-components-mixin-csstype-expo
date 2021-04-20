import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

import { LayoutProps, layoutMixin } from '../../../styles/layout';
import { sizeValueToPixel, SpaceProps, Space, spaceMixin } from '../../../styles/space';
import { flexboxMixin, FlexboxProps } from '../../../styles/flexbox';
import { BackgroundProps, backgroundMixin } from '../../../styles/background';
import { borderMixin, BorderProps } from '../../../styles/border';

type VStackStyledProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<FlexboxProps> &
  Partial<BorderProps> &
  Partial<BackgroundProps>;

export const VStackStyled = styled.View<VStackStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  ${layoutMixin}
  ${spaceMixin}
  ${flexboxMixin}
  ${backgroundMixin}
  ${borderMixin}
`;

export type VStackProps = VStackStyledProps & {
  children?: ReactNode;
  spacing?: Space;
};

export const VStack = ({ children, spacing, ...styles }: VStackProps) => {
  const childrenWithProps = spacing
    ? React.Children.map(children, (child, index) => {
        if (index === 0 || !React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          style: { marginTop: sizeValueToPixel(spacing as number) },
        });
      })
    : children;

  return <VStackStyled children={childrenWithProps} {...styles} />;
};
