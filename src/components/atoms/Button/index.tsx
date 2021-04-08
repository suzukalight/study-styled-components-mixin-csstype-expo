import React, { ReactNode, useContext } from 'react';
import { GestureResponderEvent } from 'react-native';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components/native';

import { palette, ThemeColors } from '../../styles/color';
import { FlexboxProps, flexboxMixin } from '../../styles/flexbox';
import { LayoutProps, layoutMixin } from '../../styles/layout';
import { Typography } from '../Typography';

type ButtonStyles = Partial<LayoutProps> &
  Partial<FlexboxProps> & {
    primary?: boolean;
    danger?: boolean;
    disabled?: boolean;
  };

type ButtonStyledProps = ButtonStyles & {
  theme: ThemeColors;
};

const ButtonContainer = styled.TouchableOpacity`
  height: 48px;
  padding: 16px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${flexboxMixin}
  ${layoutMixin}

  background-color: ${({ theme, primary, danger, disabled }: ButtonStyledProps) =>
    disabled ? palette.lightgray : primary ? theme.primary : danger ? palette.red : 'transparent'};
  border: ${({ primary, danger, disabled }: ButtonStyledProps) =>
    disabled ? palette.lightgray : primary || danger ? 'none' : `1px solid ${palette.gray}`};
`;

export type ButtonProps = ButtonStyles & {
  label: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
};

export const Button = ({ label, primary, danger, disabled, onPress, ...styles }: ButtonProps) => {
  const theme = useContext<ThemeColors>(ThemeContext);

  return (
    <ButtonContainer
      {...styles}
      activeOpacity={0.75}
      onPress={onPress}
      theme={theme}
      primary={primary}
      danger={danger}
      disabled={disabled}
    >
      <Typography
        fontSize="large"
        fontWeight={disabled ? 'normal' : primary || danger ? 'bold' : 'normal'}
        color={disabled ? palette.white : primary || danger ? palette.white : palette.black}
      >
        {label}
      </Typography>
    </ButtonContainer>
  );
};
