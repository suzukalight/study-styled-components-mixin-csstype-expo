import React, { ReactNode } from 'react';

import { Box } from '../../atoms/Box';
import { Typography } from '../../atoms/Typography';

import { palette } from '../../styles/color';

export type FormLabelProps = {
  label?: ReactNode;
  required?: boolean;
};

export const FormLabel = ({ label, required, ...styles }: FormLabelProps) => {
  return label ? (
    <Box {...styles} display="flex" justifyContent="flex-start">
      <Typography>{label}</Typography>

      {required && (
        <Typography color={palette.red} ml={2}>
          (必須)
        </Typography>
      )}
    </Box>
  ) : null;
};
