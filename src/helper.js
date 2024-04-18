import {
  mock_fx_daily_res,
  mock_fx_monthly_res,
  mock_fx_weekly_res,
} from './constant/mock';

import {images} from './assets/images';

const extractKeyStatistics = (data, period) => {
  const monthlyTimeSeries = data[`${period}`];
  const closingPrices = Object.values(monthlyTimeSeries).map(entry =>
    parseFloat(entry['4. close']),
  );
  const volumes = Object.values(monthlyTimeSeries).map(entry =>
    parseInt(entry['5. volume'], 10),
  );

  // Highest closing price
  const highestClosingPrice = Math.max(...closingPrices).toFixed(2);

  // Lowest closing price
  const lowestClosingPrice = Math.min(...closingPrices).toFixed(2);

  // Average closing price
  const totalClosingPrice = closingPrices.reduce((acc, val) => acc + val, 0);
  const averageClosingPrice = (
    totalClosingPrice / closingPrices.length
  ).toFixed(2);

  // Total volume in millions
  const totalVolume = volumes?.reduce((acc, val) => acc + val, 0);
  const totalVolumeInMillions = totalVolume
    ? (totalVolume / 1000000).toFixed()
    : null;

  return {
    highestClosingPrice,
    lowestClosingPrice,
    averageClosingPrice,
    totalVolume: totalVolumeInMillions ? `${totalVolumeInMillions} M` : null,
  };
};
const formattedDates = dates => {
  return dates.map(date => {
    const dateObj = new Date(date);
    const monthAbbreviation = dateObj.toLocaleString('default', {
      month: 'short',
    });
    return `${dateObj.getDate()} ${monthAbbreviation}`;
  });
};
const createData = (data, period) => {
  const dates = Object.keys(data[period]);
  const closingPrices = dates.map(date =>
    parseFloat(data[period][date]['4. close']),
  );
  const keyStats = extractKeyStatistics(data, period);
  return {dates, closingPrices, keyStats};
};
const flag = code => {
  switch (code) {
    case 'USD':
      return images.usa;
    case 'EUR':
      return images.eur;
    case 'GBX':
      return images.gbx;
    case 'JPY':
      return images.jpy;
    default:
      return null;
  }
};

const getFunctionForTimePeriod = timePeriod => {
  switch (timePeriod) {
    case 'Daily':
      return {period: 'FX_DAILY', mock: mock_fx_daily_res};
    case 'Weekly':
      return {period: 'FX_WEEKLY', mock: mock_fx_weekly_res};
    case 'Monthly':
      return {period: 'FX_MONTHLY', mock: mock_fx_monthly_res};
    default:
      throw new Error('Invalid time period');
  }
};
export default {
  formattedDates,
  extractKeyStatistics,
  createData,
  flag,
  getFunctionForTimePeriod,
};
