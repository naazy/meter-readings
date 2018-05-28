import React from 'react';
import meterReadingsData from './data/meterReadingsReal.json';
import MeterReadingsTable from './components/MeterReadingsTable.jsx';
import EnergyUsageChart from './components/EnergyUsageChart.jsx';

export default () => {
  const meterReadings = meterReadingsData.electricity;

  return (
    <div>
      <EnergyUsageChart meterReadings={meterReadings}/>
      <MeterReadingsTable meterReadings={meterReadings}/>
    </div>
  );
}
