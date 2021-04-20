import * as CSS from 'csstype';
import { css } from 'styled-components';

export type FlexboxProps = {
  alignContent: CSS.Property.AlignContent;
  alignItems: CSS.Property.AlignItems;
  alignSelf: CSS.Property.AlignSelf;
  justifyContent: CSS.Property.JustifyContent;
  justifyItems: CSS.Property.JustifyItems;
  justifySelf: CSS.Property.JustifySelf;
  flexWrap: CSS.Property.FlexWrap;
  flexBasis: CSS.Property.FlexBasis;
  flexDirection: CSS.Property.FlexDirection;
  flexGrow: CSS.Property.FlexGrow;
  flexShrink: CSS.Property.FlexShrink;
  order: CSS.Property.Order;
};

export const flexboxMixin = css<Partial<FlexboxProps>>`
  ${({ alignContent }) => alignContent != null && `align-content: ${alignContent};`}
  ${({ alignItems }) => alignItems != null && `align-items: ${alignItems};`}
  ${({ alignSelf }) => alignSelf != null && `align-self: ${alignSelf};`}
  ${({ justifyContent }) => justifyContent != null && `justify-content: ${justifyContent};`}
  ${({ justifyItems }) => justifyItems != null && `justify-items: ${justifyItems};`}
  ${({ justifySelf }) => justifySelf != null && `justify-self: ${justifySelf};`}
  ${({ flexWrap }) => flexWrap != null && `flex-wrap: ${flexWrap};`}
  ${({ flexBasis }) => flexBasis != null && `flex-basis: ${flexBasis};`}
  ${({ flexDirection }) => flexDirection != null && `flex-direction: ${flexDirection};`}
  ${({ flexGrow }) => flexGrow != null && `flex-grow: ${flexGrow};`}
  ${({ flexShrink }) => flexShrink != null && `flex-shrink: ${flexShrink};`}
  ${({ order }) => order != null && `order: ${order};`}
`;
