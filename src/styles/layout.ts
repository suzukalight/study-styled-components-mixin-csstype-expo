import * as CSS from 'csstype';
import { css } from 'styled-components';

export type Size = string | number;

export type LayoutProps = {
  w: Size;
  h: Size;
  maxW: Size;
  maxH: Size;
  display: CSS.Property.Display;
  overflow: CSS.Property.Overflow;
  overflowX: CSS.Property.OverflowX;
  overflowY: CSS.Property.OverflowY;
};

export const layoutMixin = css<Partial<LayoutProps>>`
  ${({ w }) => w != null && `width: ${w};`}
  ${({ h }) => h != null && `height: ${h};`}
  ${({ maxW }) => maxW != null && `max-width: ${maxW};`}
  ${({ maxH }) => maxH != null && `max-height: ${maxH};`}

  ${({ overflow }) => overflow != null && `overflow: ${overflow};`}
  ${({ overflowX }) => overflowX != null && `overflow-x: ${overflowX};`}
  ${({ overflowY }) => overflowY != null && `overflow-y: ${overflowY};`}

  ${({ display }) => display != null && `display: ${display};`}
`;
