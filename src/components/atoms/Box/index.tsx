import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

import { LayoutProps, layoutMixin } from '../../../styles/layout';
import { SpaceProps, spaceMixin } from '../../../styles/space';
import { flexboxMixin, FlexboxProps } from '../../../styles/flexbox';
import { BackgroundProps, backgroundMixin } from '../../../styles/background';
import { borderMixin, BorderProps } from '../../../styles/border';

export type BoxStyledProps = Partial<LayoutProps> &
  Partial<SpaceProps> &
  Partial<FlexboxProps> &
  Partial<BorderProps> &
  Partial<BackgroundProps>;

export const BoxStyled = styled.View<BoxStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  width: 100%;

  ${layoutMixin}
  ${spaceMixin}
  ${flexboxMixin}
  ${backgroundMixin}
  ${borderMixin}
`;

export type BoxProps = BoxStyledProps & {
  children?: ReactNode;
};

export const Box = (props: BoxProps) => <BoxStyled {...props} />;
