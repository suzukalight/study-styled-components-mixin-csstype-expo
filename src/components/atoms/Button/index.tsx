import React, { useContext } from "react";
import { GestureResponderEvent } from "react-native";
import { ThemeContext } from "styled-components";
import styled from "styled-components/native";

import { colorPalettes, ThemeColors } from "../../styles/color";
import { Typography } from "../Typography";

type ButtonStyledProps = {
  theme: ThemeColors;
};

const ButtonContainer = styled.TouchableOpacity`
  height: 48px;
  padding: 1rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: ButtonStyledProps) => theme.primary};
`;

const ButtonText = styled(Typography)`
  color: ${colorPalettes.white};
`;

export type ButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export const Button = ({ onPress, title }: ButtonProps) => {
  const theme = useContext<ThemeColors>(ThemeContext);

  return (
    <ButtonContainer activeOpacity={0.75} onPress={onPress} theme={theme}>
      <ButtonText fontSize="large">{title}</ButtonText>
    </ButtonContainer>
  );
};
