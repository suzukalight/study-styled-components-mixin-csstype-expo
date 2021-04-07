import * as CSS from 'csstype';
import { css } from 'styled-components';

export type BackgroundProps = {
  bg: CSS.Property.Color;
  bgColor: CSS.Property.BackgroundColor;
  bgClip: CSS.Property.BackgroundClip;
  bgGradient: CSS.Property.BackgroundImage;
  bgPos: CSS.Property.BackgroundPosition;
  bgImage: CSS.Property.BackgroundImage;
  bgRepeat: CSS.Property.BackgroundRepeat;
  bgSize: CSS.Property.BackgroundSize | number;
  bgAttachment: CSS.Property.BackgroundAttachment;
  bgPosition: CSS.Property.BackgroundPosition | number;
};

export const backgroundMixin = css<Partial<BackgroundProps>>`
  ${({ bg }) => bg != null && `background: ${bg};`}
  ${({ bgColor }) => bgColor != null && `background-color: ${bgColor};`}
  ${({ bgClip }) => bgClip != null && `background-clip: ${bgClip};`}
  ${({ bgGradient }) => bgGradient != null && `background-gradient: ${bgGradient};`}
  ${({ bgPos }) => bgPos != null && `background-position: ${bgPos};`}
  ${({ bgImage }) => bgImage != null && `background-image: ${bgImage};`}
  ${({ bgRepeat }) => bgRepeat != null && `background-repeat: ${bgRepeat};`}
  ${({ bgSize }) => bgSize != null && `background-size: ${bgSize};`}
  ${({ bgAttachment }) => bgAttachment != null && `background-attachment: ${bgAttachment};`}
  ${({ bgPosition }) => bgPosition != null && `background-position: ${bgPosition};`}
`;
