import React from 'react';
import { Button, ButtonProps, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    width: theme.spacing(10),
    height: theme.spacing(7),
  },
}));

const BaseButton = ({ children, ...optionProps }: ButtonProps) => {
  const classes = useStyles();
  return (
    <Button {...optionProps} className={classes.button} variant="outlined">
      {children}
    </Button>
  );
};

export default BaseButton;
