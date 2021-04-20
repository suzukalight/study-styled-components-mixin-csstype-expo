import React from 'react';
import { Box, BoxProps } from '.';

export const Center = (props: BoxProps) => (
  <Box display="flex" justifyContent="center" alignItems="center" {...props} />
);
