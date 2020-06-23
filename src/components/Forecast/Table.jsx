import React from 'react';
import PropTypes from 'prop-types';

import { StyledTableInner, StyledTableContainer } from './styles';
import TableRow from './TableRow';

function Table(props) {
  const { data, weatherMessage } = props;

  return (
    <StyledTableContainer>
      <h1 style={{ fontSize: '1em' }}>{weatherMessage}</h1>
      <StyledTableInner>
        <table>
          <tbody>
            <TableRow cells={data.time} />
            <TableRow header='Condition' cells={data.condition} />
            <TableRow header='Temp' cells={data.temp} />
            <TableRow header='Feels Like' cells={data.feelsLike} />
            <TableRow header='Humidity' cells={data.humidity} />
          </tbody>
        </table>
      </StyledTableInner>
    </StyledTableContainer>
  );
}

Table.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }),
};

export default Table;
