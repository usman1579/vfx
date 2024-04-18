import React from 'react';
import {StockChart} from '.';
import {render} from '@testing-library/react-native';

// Mock data
const mockDates = [
  '2022-04-01',
  '2022-04-02',
  '2022-04-03',
  '2022-04-04',
  '2022-04-05',
  '2022-04-06',
  '2022-04-07',
];
const mockKeyStats = {
  lowestClosingPrice: 100,
  highestClosingPrice: 200,
  averageClosingPrice: 150,
  totalVolume: 500000,
};
const mockClosingPrices = [150, 160, 155, 165, 170, 175, 180];

describe('StockChart', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <StockChart
        dates={mockDates}
        keyStats={mockKeyStats}
        closingPrices={mockClosingPrices}
      />,
    );
    expect(getByText('Overview')).toBeTruthy();
    expect(getByText('Key Statistics')).toBeTruthy();
    expect(getByText('Lowest Closing Price')).toBeTruthy();
    expect(getByText('Highest Closing Price')).toBeTruthy();
    expect(getByText('Avg. Closing Price')).toBeTruthy();
    expect(getByText('Total Volume')).toBeTruthy();
  });
});
