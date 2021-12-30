import React, { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import makeData from './mocks';
import Table from '.';
import './styles.scss';

const Test = () => {
  const columns = useMemo(
    () => [
      {
        accessor: 'name',
        Header: 'Name',
      },
      {
        accessor: 'email',
        Header: 'Email',
      },
    ],
    []
  );

  // const data = useMemo(
  //   () =>
  //     Array(500)
  //       .fill(undefined)
  //       .map((_, index) => ({
  //         name: `name: ${index}`,
  //         email: `email: ${index}`,
  //       })),
  //   []
  // );

  const data = React.useMemo(() => makeData(5, 5), []);

  return (
    <>
      <CssBaseline />
      <Table columns={columns} data={data} />
    </>
  );
};

export default Test;
