import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

import { baseTextField } from '../style';

const BaseTextField = ({ ...optionProps }: TextFieldProps) => {
  return <TextField sx={baseTextField} {...optionProps} variant="outlined" />;
};

export default BaseTextField;
