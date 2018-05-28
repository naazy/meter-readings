import React from 'react';
import { shallow } from 'enzyme';

import meterReadingsPerfect from '../src/data/meterReadingsSample.json';
import {getEnergyUsageData} from '../src/components/EnergyUsageChart.jsx';
import meterReadingsReal from '../src/data/meterReadingsReal.json';

describe('getEnergyUsageData', () => {
  it('getEnergyUsageData returns the monthly energyUsage for the provided data when readings are "perfect"', () => {
    const expectedEnergyUsageData =
      [ { date: 'Apr 30th 2017', energyUsage: 259 },
        { date: 'May 31st 2017', energyUsage: 243 },
        { date: 'Jun 30th 2017', energyUsage: 188 },
        { date: 'Jul 31st 2017', energyUsage: 163 },
        { date: 'Aug 31st 2017', energyUsage: 167 },
        { date: 'Sep 30th 2017', energyUsage: 162 },
        { date: 'Oct 31st 2017', energyUsage: 183 },
        { date: 'Nov 30th 2017', energyUsage: 265 },
        { date: 'Dec 31st 2017', energyUsage: 287 },
        { date: 'Jan 31st 2018', energyUsage: 310 },
        { date: 'Feb 28th 2018', energyUsage: 286 },
        { date: 'Mar 31st 2018', energyUsage: 263 },
        { date: 'Apr 30th 2018', energyUsage: 234 } ];

    const actualEnergyUsageData = getEnergyUsageData(meterReadingsPerfect.electricity);
    expect(actualEnergyUsageData).toEqual(expectedEnergyUsageData);
  });

  it('getEnergyUsageData returns the monthly energyUsage for the provided data when readings are real', () => {
    const expectedEnergyUsageData =
      [ { date: 'Apr 30th 2017', energyUsage: 298 },
        { date: 'May 31st 2017', energyUsage: 328 },
        { date: 'Jun 30th 2017', energyUsage: 196 },
        { date: 'Jul 31st 2017', energyUsage: 132 },
        { date: 'Aug 31st 2017', energyUsage: 167 },
        { date: 'Sep 30th 2017', energyUsage: 186 },
        { date: 'Oct 31st 2017', energyUsage: 147 },
        { date: 'Nov 30th 2017', energyUsage: 919 },
        { date: 'Dec 31st 2017', energyUsage: 281 },
        { date: 'Jan 31st 2018', energyUsage: 297 },
        { date: 'Feb 28th 2018', energyUsage: 418 },
        { date: 'Mar 31st 2018', energyUsage: 156 },
        { date: 'Apr 30th 2018', energyUsage: 224 } ];

    const actualEnergyUsageData = getEnergyUsageData(meterReadingsReal.electricity);
    expect(actualEnergyUsageData).toEqual(expectedEnergyUsageData);
  });
});
