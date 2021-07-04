import React from 'react';
import { makeStyles, TextField, TextFieldProps } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  input: {
    marginRight: theme.spacing(1),
  },
}));

const BaseTextField = ({ ...optionProps }: TextFieldProps) => {
  const classes = useStyles();

  return (
    <TextField className={classes.input} {...optionProps} variant="outlined" />
  );
};

export default BaseTextField;
