import * as CSS from 'csstype';
import { css } from 'styled-components';

export type BackgroundProps = {
  bgColor: CSS.Property.BackgroundColor;
};

export const backgroundMixin = css<Partial<BackgroundProps>>`
  ${({ bgColor }) => bgColor != null && `background-color: ${bgColor};`}
`;
