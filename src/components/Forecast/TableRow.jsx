import React from 'react';

function TableRow(props) {
  const { cells, header } = props;
  return (
    <tr>
      <th>{header}</th>
      {cells.map((item, index) => {
        if (header) return <td key={index}>{item}</td>;
        return <th key={index}>{item}</th>;
      })}
    </tr>
  );
}

export default TableRow;
