import * as CSS from 'csstype';
import { css } from 'styled-components';

export const palette = {
  black: '#1b2021',
  white: '#f7f3e9',
  gray: '#536162',
  lightgray: '#d7d3d9',
  red: '#ce1212',
  orange: '#e48900',
  yellow: '#f7ea00',
  green: '#289672',
  sky: '#8fd5e1',
  blue: '#150e56',
  indigo: '#150e56',
  brown: '#7b113a',
};

export type ThemeColorKeys = 'primary' | 'secondary' | 'tertiary';
export type ThemeColors = { [key in ThemeColorKeys]: string };
export const themeColors: ThemeColors = {
  primary: palette.indigo,
  secondary: palette.brown,
  tertiary: palette.blue,
};

export type Color = CSS.Property.Color;
export type ColorProps = {
  color: Color;
};

export const colorMixin = css<Partial<ColorProps>>`
  ${({ color }) => color != null && `color: ${color};`}
`;
