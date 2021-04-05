import React, { ReactNode } from "react";
import styled from "styled-components/native";

import { StyleSize, fz } from "../../styles/type";

export type TypographyStyledProps = {
  fontSize?: StyleSize;
  fontWeight?: number | string;
};

export const TypographyStyled = styled.Text`
  font-size: ${({ fontSize }: TypographyStyledProps) =>
    fz(fontSize ?? "medium")};
  font-weight: ${({ fontWeight }: TypographyStyledProps) => fontWeight ?? 500};
  color: black;
`;

export type TypographyProps = TypographyStyledProps & {
  children?: ReactNode;
};

export const Typography = ({ children, ...styles }: TypographyProps) => (
  <TypographyStyled children={children} {...styles} />
);
