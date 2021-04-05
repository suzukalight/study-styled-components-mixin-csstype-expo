import React, { ReactNode } from "react";
import styled from "styled-components/native";

export type HStackStyledProps = {
  w?: number | string;
  maxW?: number | string;
};

export const HStackStyled = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  width: ${({ w }: HStackStyledProps) => w ?? "auto"};
  max-width: ${({ maxW }: HStackStyledProps) => maxW ?? "auto"};
`;

export type HStackProps = HStackStyledProps & {
  children?: ReactNode;
};

export const HStack = ({ children, ...styles }: HStackProps) => (
  <HStackStyled children={children} {...styles} />
);
