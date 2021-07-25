import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

import { baseButton } from '../style';

const BaseButton = ({ children, ...optionProps }: ButtonProps) => {
  return (
    <Button {...optionProps} sx={baseButton} variant="outlined">
      {children}
    </Button>
  );
};

export default BaseButton;
