import React from 'react';
import styled from 'styled-components';

const MeterReadingsTable = props => {
  const { meterReadings } = props;

  const meterReadingRows = meterReadings.map(reading => (
        <tr key={reading.readingDate}>
          <Td>{reading.readingDate}</Td>
          <Td>{reading.cumulative}</Td>
          <Td>{reading.unit}</Td>
        </tr>
      ))

  return (
    <div>
    <h2>Meter Readings</h2>
    <Table>
      <tbody>
        <tr>
          <Th>Date</Th>
          <Th>Reading</Th>
          <Th>Unit</Th>
        </tr>
        {meterReadingRows}
      </tbody>
    </Table>
    </div>
  )
}

const Table = styled.table`
  font-size: 1.5rem;
`;

const Td = styled.td`
   border: 1px solid black;`;

const Th = styled.th`
  border: 1px solid black,
  text-align: center;
;`;

export default MeterReadingsTable;
