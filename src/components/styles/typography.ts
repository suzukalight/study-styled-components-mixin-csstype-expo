import * as CSS from 'csstype';
import { css } from 'styled-components';

import { StyleSize } from './type';

const fontSizes: { [key in StyleSize]: string } = {
  'xx-small': '8px',
  'x-small': '12px',
  small: '14px',
  medium: '16px',
  large: '20px',
  'x-large': '24px',
  'xx-large': '32px',
  'xxx-large': '48px',
};

export type FontSize = StyleSize | CSS.Property.FontSize;
export type FontProps = {
  fontSize: FontSize;
  fontWeight: CSS.Property.FontWeight;
  lineHeight: CSS.Property.LineHeight;
  textAlign: CSS.Property.TextAlign;
  textOverflow: CSS.Property.TextOverflow;
  wordBreak: CSS.Property.WordBreak;
  whiteSpace: CSS.Property.WhiteSpace;
  textDecoration: CSS.Property.TextDecoration;
};

export const fz = (fontSize?: FontSize) => {
  if (typeof fontSize === 'string') return fontSizes[fontSize as StyleSize] ?? fontSize;
  if (typeof fontSize === 'number') return `${fontSize}px`;
  return 'inherit';
};

export const fontMixin = css<Partial<FontProps>>`
  ${({ fontSize }) => fontSize != null && `font-size: ${fz(fontSize ?? 'medium')};`}
  ${({ fontWeight }) => fontWeight != null && `font-weight: ${fontWeight};`}
  ${({ lineHeight }) => lineHeight != null && `line-height: ${lineHeight};`}
  ${({ textAlign }) => textAlign != null && `text-align: ${textAlign};`}
  ${({ textOverflow }) => textOverflow != null && `text-overflow: ${textOverflow};`}
  ${({ wordBreak }) => wordBreak != null && `word-break: ${wordBreak};`}
  ${({ whiteSpace }) => whiteSpace != null && `white-space: ${whiteSpace};`}
  ${({ textDecoration }) => textDecoration != null && `text-decoration: ${textDecoration};`}
`;
