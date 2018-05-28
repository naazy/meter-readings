import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import moment from 'moment';

const EnergyUsageChart = props => {

  const { meterReadings } = props;

  const energyUsageData = getEnergyUsageData(meterReadings);

  return (
    <div>
      <h2>Energy Usage (kWh)</h2>
      <BarChart width={1400} height={400} data={energyUsageData}>
        <XAxis dataKey="date" />
        <YAxis dataKey="energyUsage" />
        <CartesianGrid horizontal={false} />
        <Tooltip />
        <Bar dataKey="energyUsage" fill="#03ad54" isAnimationActive={false} />
      </BarChart>
    </div>
  )
}

// FOR SAMPLE DATA (task1)
// export const getEnergyUsageData  = meterReadings => meterReadings.map((reading, i) => {
//   if(meterReadings[i + 1]){
//     return {
//         date: meterReadings[i+1].readingDate,
//         energyUsage: meterReadings[i+1].cumulative - reading.cumulative
//       }
//     }
//   }).filter(reading => reading);

export const getEnergyUsageData  = meterReadings =>
  meterReadings.map((reading, i) => {
    if(meterReadings[i + 1]){
      const previousReading = meterReadings[i];
      const currentReading = meterReadings[i+1];
      const previousDate = moment.utc(previousReading.readingDate);
      const currentDate = moment.utc(currentReading.readingDate);
      const daysSincePreviousReading = getDiffInDays(currentDate, previousDate);
      const usagePerDay = (currentReading.cumulative - previousReading.cumulative) / daysSincePreviousReading;

      return {
          date: currentDate.endOf('month').format("MMM Do YYYY"),
          energyUsage: Math.round(usagePerDay * currentDate.daysInMonth())
        }
      }
    }).filter(reading => reading);

 const getDiffInDays =(mmt1, mm2) => {
   return mmt1.diff(mm2, 'days');
 }

export default EnergyUsageChart;
