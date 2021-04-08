import React, { useCallback } from 'react';
import { CheckBox as RneCheckBox } from 'react-native-elements';
import styled from 'styled-components/native';
import { Box } from '../../atoms/Box';

import { backgroundMixin, BackgroundProps } from '../../styles/background';
import { borderMixin, BorderProps } from '../../styles/border';
import { colorMixin, ColorProps } from '../../styles/color';
import { layoutMixin, LayoutProps } from '../../styles/layout';
import { spaceMixin, SpaceProps } from '../../styles/space';
import { FontProps, fontMixin } from '../../styles/typography';

export type CheckboxStyledProps = Partial<Omit<FontProps, 'textAlign'>> &
  Partial<ColorProps> &
  Partial<BorderProps> &
  Partial<BackgroundProps> &
  Partial<SpaceProps> &
  Partial<LayoutProps>;

export const CheckboxStyled = styled(Box)`
  padding: 8px 0;

  ${layoutMixin}
  ${spaceMixin}
  ${backgroundMixin}
  ${borderMixin}
  ${fontMixin}
  ${colorMixin}
`;

export type CheckboxCommonProps = CheckboxStyledProps & {
  title?: string | React.ReactElement<{}, string | React.JSXElementConstructor<any>>;
  defaultValue?: boolean;
  onBlur?: () => void;
  onChange?: (...event: any[]) => void;
};

export type CheckboxProps = CheckboxCommonProps & {
  value: boolean;
};

export const Checkbox = ({ value, defaultValue, onChange, ...props }: CheckboxProps) => {
  const handleChange = useCallback(() => {
    const newValue = !value;
    if (onChange) onChange(newValue);
  }, [value, onChange]);

  return (
    <CheckboxStyled w="100%" display="flex" flexDirection="column" justifyContent="flex-start">
      <RneCheckBox
        {...props}
        containerStyle={{
          backgroundColor: 'transparent',
          borderWidth: 0,
          padding: 0,
          margin: 0,
          marginLeft: 0,
          marginRight: 0,
        }}
        checked={value}
        onIconPress={handleChange}
        onPress={handleChange}
      />
    </CheckboxStyled>
  );
};
