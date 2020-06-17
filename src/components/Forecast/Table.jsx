import React from 'react';

import { StyledTableInner, StyledTableContainer } from './styles';
import TableRow from './TableRow';

function Table() {
  const data = ['tempo', 'tempo', 'tempo', 'tempo', 'tempo', 'tempo'];

  return (
    <StyledTableContainer>
      <h1 style={{ fontSize: '1em' }}>
        Sunny currently in São Paulo. The temperature is 20 ºC
      </h1>
      <StyledTableInner>
        <table>
          <tbody>
            <TableRow cells={data} />
            <TableRow header='Condition' cells={data} />
            <TableRow header='Temp' cells={data} />
            <TableRow header='Feels Like' cells={data} />
            <TableRow header='Humidity' cells={data} />
          </tbody>
        </table>
      </StyledTableInner>
    </StyledTableContainer>
  );
}

export default Table;
