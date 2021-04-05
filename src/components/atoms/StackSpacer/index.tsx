import React, { ReactNode } from "react";
import styled from "styled-components/native";

export const StackSpacerStyled = styled.View`
  flex-grow: 1000;
`;

export type StackSpacerProps = {
  children?: ReactNode;
};

export const StackSpacer = ({ children }: StackSpacerProps) => (
  <StackSpacerStyled children={children} />
);
