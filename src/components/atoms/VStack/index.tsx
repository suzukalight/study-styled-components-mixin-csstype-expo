import React, { ReactNode } from "react";
import styled from "styled-components/native";

export const VStackStyled = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export type VStackProps = {
  children?: ReactNode;
};

export const VStack = ({ children }: VStackProps) => (
  <VStackStyled children={children} />
);
