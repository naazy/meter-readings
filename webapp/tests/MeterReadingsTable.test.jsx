import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MeterReadingsTable from '../src/components/MeterReadingsTable.jsx';
import meterReadingsData from '../src/data/meterReadingsSample.json';
import {getEnergyUsageData} from '../src/components/EnergyUsageChart.jsx';

describe('<MeterReadingsTable />', () => {
  it('renders MeterReadingsTable component', () => {
    const wrapper = shallow(<MeterReadingsTable meterReadings={meterReadingsData.electricity}/>);;
    expect(wrapper.exists(<th>Date</th>)).toBe(true);
    expect(wrapper.exists(<th>Reading</th>)).toBe(true);
    expect(wrapper.exists(<th>Unit</th>)).toBe(true);
    expect(wrapper.exists(<td>17600</td>)).toBe(true);
    expect(wrapper.exists(<td>2017-03-31T00:00:00.000Z</td>)).toBe(true);
    expect(wrapper.exists(<td>kwH</td>)).toBe(true);
  });
});
