import * as CSS from 'csstype';
import { css } from 'styled-components';

export type PositionProps = {
  position: CSS.Property.Position;
  zIndex: CSS.Property.ZIndex;
  top: CSS.Property.Top;
  right: CSS.Property.Right;
  botom: CSS.Property.Bottom;
  left: CSS.Property.Left;
};

export const positionMixin = css<Partial<PositionProps>>`
  ${({ position }) => position != null && `position: ${position};`}
  ${({ zIndex }) => zIndex != null && `z-index: ${zIndex};`}
  ${({ top }) => top != null && `top: ${top};`}
  ${({ right }) => right != null && `right: ${right};`}
  ${({ botom }) => botom != null && `botom: ${botom};`}
  ${({ left }) => left != null && `left: ${left};`}
`;
