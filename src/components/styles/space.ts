import { StyleSize } from './type';
import { css } from 'styled-components';

type Spacings = { [key in StyleSize]: number };

export const spacings: Spacings = {
  'xx-small': 2,
  'x-small': 4,
  small: 8,
  medium: 16,
  large: 24,
  'x-large': 32,
  'xx-large': 48,
  'xxx-large': 64,
};

export type Space = StyleSize | number;

export type SpaceProps = {
  m: Space;
  mx: Space;
  my: Space;
  mt: Space;
  mr: Space;
  mb: Space;
  ml: Space;

  p: Space;
  px: Space;
  py: Space;
  pt: Space;
  pr: Space;
  pb: Space;
  pl: Space;
};

export const sp = (spacing?: Space) =>
  typeof spacing === 'string'
    ? spacings[spacing as StyleSize]
    : typeof spacing === 'number'
    ? `${spacing * 4}px`
    : 0;

export const spaceMixin = css<Partial<SpaceProps>>`
  ${({ m }) => m != null && `margin: ${sp(m)};`}

  ${({ mx }) =>
    mx != null &&
    `
      margin-left: ${sp(mx)};
      margin-right: ${sp(mx)};
    `}

  ${({ my }) =>
    my != null &&
    `
      margin-top: ${sp(my)};
      margin-bottom: ${sp(my)};
    `}

  ${({ mt }) => mt != null && `margin-top: ${sp(mt)};`}
  ${({ mr }) => mr != null && `margin-top: ${sp(mr)};`}
  ${({ mb }) => mb != null && `margin-top: ${sp(mb)};`}
  ${({ ml }) => ml != null && `margin-top: ${sp(ml)};`}

  ${({ p }) => p != null && `padding: ${sp(p)};`}

  ${({ px }) =>
    px != null &&
    `
      padding-left: ${sp(px)};
      padding-right: ${sp(px)};
    `}

  ${({ py }) =>
    py != null &&
    `
      padding-top: ${sp(py)};
      padding-bottom: ${sp(py)};
    `}

  ${({ pt }) => pt != null && `padding-top: ${sp(pt)};`}
  ${({ pr }) => pr != null && `padding-top: ${sp(pr)};`}
  ${({ pb }) => pb != null && `padding-top: ${sp(pb)};`}
  ${({ pl }) => pl != null && `padding-top: ${sp(pl)};`}
`;
