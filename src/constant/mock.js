import {images} from '../assets/images';

const currency = [
  {code: 'USD', name: 'US Dollar', flag: images.usa},
  {code: 'EUR', name: 'Euro', flag: images.eur},
  {code: 'JPY', name: 'Japanese Yen', flag: images.jpy},
  // Add more currencies as needed
];
const mockMonthlyData = {
  'Meta Data': {
    '1. Information': 'Monthly Prices (open, high, low, close) and Volumes',
    '2. Symbol': 'TSCO.LON',
    '3. Last Refreshed': '2024-04-08',
    '4. Time Zone': 'US/Eastern',
  },
  'Monthly Time Series': {
    '2024-04-09': {
      '1. open': '189.2400',
      '2. high': '191.2500',
      '3. low': '186.6600',
      '4. close': '189.3100',
      '5. volume': '5464284',
    },
    '2024-04-05': {
      '1. open': '190.0000',
      '2. high': '193.2800',
      '3. low': '187.3400',
      '4. close': '189.1400',
      '5. volume': '12808073',
    },
    '2024-03-28': {
      '1. open': '190.2600',
      '2. high': '191.9299',
      '3. low': '188.5000',
      '4. close': '190.9600',
      '5. volume': '15383298',
    },
    '2024-03-22': {
      '1. open': '191.7000',
      '2. high': '193.9800',
      '3. low': '190.0100',
      '4. close': '190.8400',
      '5. volume': '23968505',
    },
    '2024-03-15': {
      '1. open': '195.0900',
      '2. high': '199.1800',
      '3. low': '190.7000',
      '4. close': '191.0700',
      '5. volume': '27466323',
    },
    '2024-03-08': {
      '1. open': '187.7600',
      '2. high': '198.7300',
      '3. low': '187.6000',
      '4. close': '195.9500',
      '5. volume': '29085296',
    },
    '2024-03-01': {
      '1. open': '185.6000',
      '2. high': '188.3800',
      '3. low': '182.6200',
      '4. close': '188.2000',
      '5. volume': '21955379',
    },
    '2024-02-23': {
      '1. open': '187.6400',
      '2. high': '188.7700',
      '3. low': '178.7500',
      '4. close': '185.7200',
      '5. volume': '17487852',
    },
    '2024-02-16': {
      '1. open': '185.9000',
      '2. high': '188.9500',
      '3. low': '182.2600',
      '4. close': '187.6400',
      '5. volume': '21745006',
    },
    '2024-02-09': {
      '1. open': '185.5100',
      '2. high': '187.1800',
      '3. low': '181.4900',
      '4. close': '186.3400',
      '5. volume': '22784812',
    },
    '2024-02-02': {
      '1. open': '187.4600',
      '2. high': '189.4600',
      '3. low': '182.7100',
      '4. close': '185.7900',
      '5. volume': '28283876',
    },
    '2024-01-26': {
      '1. open': '172.8200',
      '2. high': '196.9000',
      '3. low': '172.4000',
      '4. close': '187.4200',
      '5. volume': '56232762',
    },
    '2024-01-19': {
      '1. open': '165.8000',
      '2. high': '171.5791',
      '3. low': '165.0400',
      '4. close': '171.4800',
      '5. volume': '19864308',
    },
    '2024-01-12': {
      '1. open': '158.6900',
      '2. high': '165.9800',
      '3. low': '157.8850',
      '4. close': '165.8000',
      '5. volume': '17643392',
    },
    '2024-01-05': {
      '1. open': '162.8300',
      '2. high': '163.2900',
      '3. low': '158.6700',
      '4. close': '159.1600',
      '5. volume': '14822074',
    },
    '2023-12-29': {
      '1. open': '162.2300',
      '2. high': '164.1800',
      '3. low': '162.0500',
      '4. close': '163.5500',
      '5. volume': '9376537',
    },
    '2023-12-22': {
      '1. open': '162.2300',
      '2. high': '163.3300',
      '3. low': '159.5300',
      '4. close': '162.1400',
      '5. volume': '17686398',
    },
    '2023-12-15': {
      '1. open': '162.6800',
      '2. high': '166.3400',
      '3. low': '160.1490',
      '4. close': '162.2300',
      '5. volume': '33504550',
    },
    '2023-12-08': {
      '1. open': '160.2900',
      '2. high': '162.7900',
      '3. low': '159.9700',
      '4. close': '161.9600',
      '5. volume': '21918957',
    },
    '2023-12-01': {
      '1. open': '154.9900',
      '2. high': '160.5900',
      '3. low': '154.7500',
      '4. close': '160.5500',
      '5. volume': '21900644',
    },
    '2023-11-24': {
      '1. open': '152.5100',
      '2. high': '155.7050',
      '3. low': '152.3500',
      '4. close': '155.1800',
      '5. volume': '11362696',
    },
    '2023-11-17': {
      '1. open': '148.4600',
      '2. high': '153.5000',
      '3. low': '147.3500',
      '4. close': '152.8900',
      '5. volume': '19547595',
    },
    '2023-11-10': {
      '1. open': '147.8900',
      '2. high': '149.6800',
      '3. low': '145.2800',
      '4. close': '149.0200',
      '5. volume': '18357944',
    },
    '2023-11-03': {
      '1. open': '143.1900',
      '2. high': '148.4450',
      '3. low': '142.5800',
      '4. close': '147.9000',
      '5. volume': '22959464',
    },
    '2023-10-27': {
      '1. open': '136.6300',
      '2. high': '144.7000',
      '3. low': '135.8700',
      '4. close': '142.5200',
      '5. volume': '30227448',
    },
    '2023-10-20': {
      '1. open': '139.2800',
      '2. high': '140.6200',
      '3. low': '136.3100',
      '4. close': '137.1600',
      '5. volume': '21044049',
    },
    '2023-10-13': {
      '1. open': '142.3000',
      '2. high': '143.4150',
      '3. low': '138.2700',
      '4. close': '138.4600',
      '5. volume': '16386334',
    },
    '2023-10-06': {
      '1. open': '140.0400',
      '2. high': '142.9400',
      '3. low': '139.8600',
      '4. close': '142.0300',
      '5. volume': '15932918',
    },
    '2023-09-29': {
      '1. open': '146.5700',
      '2. high': '147.4300',
      '3. low': '139.6100',
      '4. close': '140.3000',
      '5. volume': '23445425',
    },
    '2023-09-22': {
      '1. open': '145.7700',
      '2. high': '151.9299',
      '3. low': '144.6600',
      '4. close': '146.9100',
      '5. volume': '23597168',
    },
    '2023-09-15': {
      '1. open': '148.5700',
      '2. high': '148.7800',
      '3. low': '145.5300',
      '4. close': '145.9900',
      '5. volume': '19316647',
    },
    '2023-09-08': {
      '1. open': '147.9100',
      '2. high': '149.0000',
      '3. low': '147.1200',
      '4. close': '147.6800',
      '5. volume': '13719451',
    },
    '2023-09-01': {
      '1. open': '145.4100',
      '2. high': '148.1000',
      '3. low': '145.2100',
      '4. close': '147.9400',
      '5. volume': '15198607',
    },
    '2023-08-25': {
      '1. open': '141.4200',
      '2. high': '145.4700',
      '3. low': '141.1100',
      '4. close': '145.3500',
      '5. volume': '15614989',
    },
    '2023-08-18': {
      '1. open': '143.0500',
      '2. high': '143.3650',
      '3. low': '139.7600',
      '4. close': '141.4100',
      '5. volume': '18826007',
    },
    '2023-08-11': {
      '1. open': '145.0000',
      '2. high': '146.5000',
      '3. low': '142.2050',
      '4. close': '143.1200',
      '5. volume': '19428470',
    },
    '2023-08-04': {
      '1. open': '143.8100',
      '2. high': '146.0900',
      '3. low': '142.1700',
      '4. close': '144.2400',
      '5. volume': '24072830',
    },
    '2023-07-28': {
      '1. open': '139.3500',
      '2. high': '143.9500',
      '3. low': '138.7788',
      '4. close': '143.4500',
      '5. volume': '24310886',
    },
    '2023-07-21': {
      '1. open': '133.2600',
      '2. high': '140.3200',
      '3. low': '133.1000',
      '4. close': '138.9400',
      '5. volume': '29295540',
    },
    '2023-07-14': {
      '1. open': '131.7600',
      '2. high': '135.3300',
      '3. low': '131.6950',
      '4. close': '133.4000',
      '5. volume': '15109770',
    },
    '2023-07-07': {
      '1. open': '133.4200',
      '2. high': '134.3500',
      '3. low': '131.5500',
      '4. close': '132.0800',
      '5. volume': '10923840',
    },
    '2023-06-30': {
      '1. open': '129.3900',
      '2. high': '135.0300',
      '3. low': '129.3100',
      '4. close': '133.8100',
      '5. volume': '18695850',
    },
    '2023-06-23': {
      '1. open': '136.3600',
      '2. high': '137.2300',
      '3. low': '129.1800',
      '4. close': '129.4300',
      '5. volume': '27111509',
    },
    '2023-06-16': {
      '1. open': '136.0000',
      '2. high': '139.4690',
      '3. low': '135.8216',
      '4. close': '137.4800',
      '5. volume': '24228597',
    },
    '2023-06-09': {
      '1. open': '133.1200',
      '2. high': '136.1000',
      '3. low': '131.8800',
      '4. close': '135.3000',
      '5. volume': '21174178',
    },
    '2023-06-02': {
      '1. open': '129.5600',
      '2. high': '133.1200',
      '3. low': '127.4600',
      '4. close': '132.4200',
      '5. volume': '24339245',
    },
    '2023-05-26': {
      '1. open': '127.5000',
      '2. high': '129.6600',
      '3. low': '125.0100',
      '4. close': '128.8900',
      '5. volume': '21029979',
    },
    '2023-05-19': {
      '1. open': '123.0000',
      '2. high': '128.2900',
      '3. low': '122.3400',
      '4. close': '127.2600',
      '5. volume': '18284524',
    },
    '2023-05-12': {
      '1. open': '123.7600',
      '2. high': '123.9200',
      '3. low': '120.5500',
      '4. close': '122.8400',
      '5. volume': '20404364',
    },
    '2023-05-05': {
      '1. open': '126.3500',
      '2. high': '126.7500',
      '3. low': '121.7563',
      '4. close': '123.6500',
      '5. volume': '21164660',
    },
    '2023-04-28': {
      '1. open': '125.5500',
      '2. high': '127.2500',
      '3. low': '124.5600',
      '4. close': '126.4100',
      '5. volume': '20644224',
    },
    '2023-04-21': {
      '1. open': '128.3000',
      '2. high': '130.9800',
      '3. low': '125.2700',
      '4. close': '125.7300',
      '5. volume': '30341128',
    },
    '2023-04-14': {
      '1. open': '129.8300',
      '2. high': '131.1050',
      '3. low': '126.0000',
      '4. close': '128.1400',
      '5. volume': '19506500',
    },
  },
};
const mockSearchRes = {
  bestMatches: [
    {
      '1. symbol': 'TSCO.LON',
      '2. name': 'Tesco PLC',
      '3. type': 'Equity',
      '4. region': 'United Kingdom',
      '5. marketOpen': '08:00',
      '6. marketClose': '16:30',
      '7. timezone': 'UTC+01',
      '8. currency': 'GBX',
      '9. matchScore': '0.7273',
    },
    {
      '1. symbol': 'TSCDF',
      '2. name': 'Tesco plc',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-04',
      '8. currency': 'USD',
      '9. matchScore': '0.7143',
    },
    {
      '1. symbol': 'TSCDY',
      '2. name': 'Tesco plc',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-04',
      '8. currency': 'USD',
      '9. matchScore': '0.7143',
    },
    {
      '1. symbol': 'TCO2.FRK',
      '2. name': 'TESCO PLC ADR/1 LS-05',
      '3. type': 'Equity',
      '4. region': 'Frankfurt',
      '5. marketOpen': '08:00',
      '6. marketClose': '20:00',
      '7. timezone': 'UTC+02',
      '8. currency': 'EUR',
      '9. matchScore': '0.5455',
    },
    {
      '1. symbol': 'TCO0.FRK',
      '2. name': 'TESCO PLC LS-0633333',
      '3. type': 'Equity',
      '4. region': 'Frankfurt',
      '5. marketOpen': '08:00',
      '6. marketClose': '20:00',
      '7. timezone': 'UTC+02',
      '8. currency': 'EUR',
      '9. matchScore': '0.5455',
    },
  ],
};
const mock_fx_daily_res = {
  'Meta Data': {
    '1. Information': 'Forex Daily Prices (open, high, low, close)',
    '2. From Symbol': 'EUR',
    '3. To Symbol': 'USD',
    '4. Output Size': 'Compact',
    '5. Last Refreshed': '2024-04-11 16:10:00',
    '6. Time Zone': 'UTC',
  },
  'Time Series FX (Daily)': {
    '2024-04-11': {
      '1. open': '1.07396',
      '2. high': '1.07566',
      '3. low': '1.06989',
      '4. close': '1.07172',
    },
    '2024-04-10': {
      '1. open': '1.08569',
      '2. high': '1.08665',
      '3. low': '1.07285',
      '4. close': '1.07429',
    },
    '2024-04-09': {
      '1. open': '1.08589',
      '2. high': '1.08851',
      '3. low': '1.08475',
      '4. close': '1.08575',
    },
    '2024-04-08': {
      '1. open': '1.08371',
      '2. high': '1.08630',
      '3. low': '1.08206',
      '4. close': '1.08590',
    },
    '2024-04-05': {
      '1. open': '1.08381',
      '2. high': '1.08480',
      '3. low': '1.07912',
      '4. close': '1.08360',
    },
    '2024-04-04': {
      '1. open': '1.08331',
      '2. high': '1.08766',
      '3. low': '1.08314',
      '4. close': '1.08382',
    },
    '2024-04-03': {
      '1. open': '1.07722',
      '2. high': '1.08370',
      '3. low': '1.07637',
      '4. close': '1.08334',
    },
    '2024-04-02': {
      '1. open': '1.07435',
      '2. high': '1.07790',
      '3. low': '1.07244',
      '4. close': '1.07734',
    },
    '2024-04-01': {
      '1. open': '1.07910',
      '2. high': '1.07990',
      '3. low': '1.07307',
      '4. close': '1.07428',
    },
    '2024-03-29': {
      '1. open': '1.07889',
      '2. high': '1.08051',
      '3. low': '1.07677',
      '4. close': '1.07900',
    },
    '2024-03-28': {
      '1. open': '1.08260',
      '2. high': '1.08270',
      '3. low': '1.07748',
      '4. close': '1.07890',
    },
    '2024-03-27': {
      '1. open': '1.08319',
      '2. high': '1.08391',
      '3. low': '1.08104',
      '4. close': '1.08258',
    },
    '2024-03-26': {
      '1. open': '1.08364',
      '2. high': '1.08643',
      '3. low': '1.08240',
      '4. close': '1.08316',
    },
    '2024-03-25': {
      '1. open': '1.08074',
      '2. high': '1.08426',
      '3. low': '1.08019',
      '4. close': '1.08359',
    },
    '2024-03-22': {
      '1. open': '1.08605',
      '2. high': '1.08681',
      '3. low': '1.08015',
      '4. close': '1.08050',
    },
    '2024-03-21': {
      '1. open': '1.09206',
      '2. high': '1.09426',
      '3. low': '1.08551',
      '4. close': '1.08605',
    },
  },
};
const mock_fx_weekly_res = {
  'Meta Data': {
    '1. Information': 'Forex Weekly Prices (open, high, low, close)',
    '2. From Symbol': 'EUR',
    '3. To Symbol': 'USD',
    '4. Last Refreshed': '2024-04-11 16:25:00',
    '5. Time Zone': 'UTC',
  },
  'Time Series FX (Weekly)': {
    '2024-04-11': {
      '1. open': '1.08371',
      '2. high': '1.08851',
      '3. low': '1.06989',
      '4. close': '1.07189',
    },
    '2024-04-05': {
      '1. open': '1.07910',
      '2. high': '1.08766',
      '3. low': '1.07244',
      '4. close': '1.08360',
    },
    '2024-03-29': {
      '1. open': '1.08074',
      '2. high': '1.08643',
      '3. low': '1.07677',
      '4. close': '1.07900',
    },
    '2024-03-22': {
      '1. open': '1.08878',
      '2. high': '1.09426',
      '3. low': '1.08015',
      '4. close': '1.08050',
    },
    '2024-03-15': {
      '1. open': '1.09393',
      '2. high': '1.09638',
      '3. low': '1.08726',
      '4. close': '1.08869',
    },
    '2024-03-08': {
      '1. open': '1.08380',
      '2. high': '1.09813',
      '3. low': '1.08349',
      '4. close': '1.09381',
    },
    '2024-03-01': {
      '1. open': '1.08319',
      '2. high': '1.08660',
      '3. low': '1.07956',
      '4. close': '1.08368',
    },
    '2024-02-23': {
      '1. open': '1.07719',
      '2. high': '1.08882',
      '3. low': '1.07614',
      '4. close': '1.08188',
    },
    '2024-02-16': {
      '1. open': '1.07778',
      '2. high': '1.08055',
      '3. low': '1.06945',
      '4. close': '1.07749',
    },
    '2024-02-09': {
      '1. open': '1.07850',
      '2. high': '1.07951',
      '3. low': '1.07224',
      '4. close': '1.07821',
    },
    '2024-02-02': {
      '1. open': '1.08430',
      '2. high': '1.08974',
      '3. low': '1.07797',
      '4. close': '1.07849',
    },
    '2024-01-26': {
      '1. open': '1.08901',
      '2. high': '1.09323',
      '3. low': '1.08125',
      '4. close': '1.08512',
    },
    '2024-01-19': {
      '1. open': '1.09530',
      '2. high': '1.09676',
      '3. low': '1.08443',
      '4. close': '1.08960',
    },
    '2024-01-12': {
      '1. open': '1.09446',
      '2. high': '1.09999',
      '3. low': '1.09101',
      '4. close': '1.09483',
    },
    '2024-01-05': {
      '1. open': '1.10400',
      '2. high': '1.10460',
      '3. low': '1.08767',
      '4. close': '1.09392',
    },
    '2023-12-29': {
      '1. open': '1.10160',
      '2. high': '1.11395',
      '3. low': '1.09913',
      '4. close': '1.10374',
    },
    '2023-12-22': {
      '1. open': '1.08970',
      '2. high': '1.10401',
      '3. low': '1.08914',
      '4. close': '1.10110',
    },
    '2023-12-15': {
      '1. open': '1.07590',
      '2. high': '1.10092',
      '3. low': '1.07414',
      '4. close': '1.08922',
    },
  },
};
const mock_fx_monthly_res = {
  'Meta Data': {
    '1. Information': 'Forex Monthly Prices (open, high, low, close)',
    '2. From Symbol': 'EUR',
    '3. To Symbol': 'USD',
    '4. Last Refreshed': '2024-04-11 16:30:00',
    '5. Time Zone': 'UTC',
  },
  'Time Series FX (Monthly)': {
    '2024-04-11': {
      '1. open': '1.07910',
      '2. high': '1.08851',
      '3. low': '1.06989',
      '4. close': '1.07188',
    },
    '2024-03-29': {
      '1. open': '1.08046',
      '2. high': '1.09813',
      '3. low': '1.07677',
      '4. close': '1.07900',
    },
    '2024-02-29': {
      '1. open': '1.08180',
      '2. high': '1.08974',
      '3. low': '1.06945',
      '4. close': '1.08053',
    },
    '2024-01-31': {
      '1. open': '1.10400',
      '2. high': '1.10460',
      '3. low': '1.07947',
      '4. close': '1.08180',
    },
    '2023-12-29': {
      '1. open': '1.08860',
      '2. high': '1.11395',
      '3. low': '1.07230',
      '4. close': '1.10374',
    },
    '2023-11-30': {
      '1. open': '1.05740',
      '2. high': '1.10171',
      '3. low': '1.05165',
      '4. close': '1.08861',
    },
    '2023-10-31': {
      '1. open': '1.05676',
      '2. high': '1.06943',
      '3. low': '1.04480',
      '4. close': '1.05744',
    },
    '2023-09-29': {
      '1. open': '1.08414',
      '2. high': '1.08819',
      '3. low': '1.04878',
      '4. close': '1.05709',
    },
    '2023-08-31': {
      '1. open': '1.09966',
      '2. high': '1.10652',
      '3. low': '1.07650',
      '4. close': '1.08415',
    },
    '2023-07-31': {
      '1. open': '1.09076',
      '2. high': '1.12758',
      '3. low': '1.08330',
      '4. close': '1.09968',
    },
    '2023-06-30': {
      '1. open': '1.06856',
      '2. high': '1.10122',
      '3. low': '1.06610',
      '4. close': '1.09074',
    },
    '2023-05-31': {
      '1. open': '1.10178',
      '2. high': '1.10917',
      '3. low': '1.06340',
      '4. close': '1.06856',
    },
    '2023-04-28': {
      '1. open': '1.08418',
      '2. high': '1.10954',
      '3. low': '1.07870',
      '4. close': '1.10140',
    },
    '2023-03-31': {
      '1. open': '1.05743',
      '2. high': '1.09300',
      '3. low': '1.05150',
      '4. close': '1.08381',
    },
    '2023-02-28': {
      '1. open': '1.08610',
      '2. high': '1.10327',
      '3. low': '1.05310',
      '4. close': '1.05748',
    },
    '2023-01-31': {
      '1. open': '1.07031',
      '2. high': '1.09294',
      '3. low': '1.04816',
      '4. close': '1.08626',
    },
    '2022-12-30': {
      '1. open': '1.04041',
      '2. high': '1.07363',
      '3. low': '1.03906',
      '4. close': '1.07025',
    },
    '2022-11-30': {
      '1. open': '0.98818',
      '2. high': '1.04969',
      '3. low': '0.97280',
      '4. close': '1.04041',
    },
    '2022-10-31': {
      '1. open': '0.97954',
      '2. high': '1.00937',
      '3. low': '0.96290',
      '4. close': '0.98814',
    },
    '2022-09-30': {
      '1. open': '1.00507',
      '2. high': '1.01979',
      '3. low': '0.95320',
      '4. close': '0.98003',
    },
    '2022-08-31': {
      '1. open': '1.02182',
      '2. high': '1.03687',
      '3. low': '0.98990',
      '4. close': '1.00501',
    },
    '2022-07-29': {
      '1. open': '1.04770',
      '2. high': '1.04820',
      '3. low': '0.99500',
      '4. close': '1.02248',
    },
    '2022-06-30': {
      '1. open': '1.07308',
      '2. high': '1.07738',
      '3. low': '1.03570',
      '4. close': '1.04771',
    },
    '2022-05-31': {
      '1. open': '1.05464',
      '2. high': '1.07870',
      '3. low': '1.03480',
      '4. close': '1.07313',
    },
    '2022-04-29': {
      '1. open': '1.10658',
      '2. high': '1.10761',
      '3. low': '1.04690',
      '4. close': '1.05410',
    },
    '2022-03-31': {
      '1. open': '1.12176',
      '2. high': '1.12331',
      '3. low': '1.08040',
      '4. close': '1.10660',
    },
    '2022-02-28': {
      '1. open': '1.12346',
      '2. high': '1.14949',
      '3. low': '1.11040',
      '4. close': '1.12175',
    },
    '2022-01-31': {
      '1. open': '1.13707',
      '2. high': '1.14830',
      '3. low': '1.11200',
      '4. close': '1.12334',
    },
    '2021-12-31': {
      '1. open': '1.13350',
      '2. high': '1.13865',
      '3. low': '1.12200',
      '4. close': '1.13659',
    },
    '2021-11-30': {
      '1. open': '1.15631',
      '2. high': '1.16164',
      '3. low': '1.11850',
      '4. close': '1.13368',
    },
    '2021-10-29': {
      '1. open': '1.15802',
      '2. high': '1.16922',
      '3. low': '1.15230',
      '4. close': '1.15610',
    },
    '2021-09-30': {
      '1. open': '1.18088',
      '2. high': '1.19090',
      '3. low': '1.15610',
      '4. close': '1.15800',
    },
    '2021-08-31': {
      '1. open': '1.18635',
      '2. high': '1.18997',
      '3. low': '1.16620',
      '4. close': '1.18080',
    },
    '2021-07-30': {
      '1. open': '1.18564',
      '2. high': '1.19087',
      '3. low': '1.17500',
      '4. close': '1.18684',
    },
    '2021-06-30': {
      '1. open': '1.22259',
      '2. high': '1.22544',
      '3. low': '1.18430',
      '4. close': '1.18570',
    },
    '2021-05-31': {
      '1. open': '1.20257',
      '2. high': '1.22664',
      '3. low': '1.19840',
      '4. close': '1.22260',
    },
    '2021-04-30': {
      '1. open': '1.17260',
      '2. high': '1.21500',
      '3. low': '1.17110',
      '4. close': '1.20190',
    },
    '2021-03-31': {
      '1. open': '1.20718',
      '2. high': '1.21133',
      '3. low': '1.17020',
      '4. close': '1.17266',
    },
    '2021-02-26': {
      '1. open': '1.21285',
      '2. high': '1.22432',
      '3. low': '1.19510',
      '4. close': '1.20704',
    },
    '2021-01-29': {
      '1. open': '1.22150',
      '2. high': '1.23495',
      '3. low': '1.20520',
      '4. close': '1.21362',
    },
    '2020-12-31': {
      '1. open': '1.19243',
      '2. high': '1.23101',
      '3. low': '1.19230',
      '4. close': '1.22138',
    },
    '2020-11-30': {
      '1. open': '1.16474',
      '2. high': '1.20033',
      '3. low': '1.16020',
      '4. close': '1.19245',
    },
    '2020-10-30': {
      '1. open': '1.17234',
      '2. high': '1.18807',
      '3. low': '1.16380',
      '4. close': '1.16459',
    },
    '2020-09-30': {
      '1. open': '1.19371',
      '2. high': '1.20114',
      '3. low': '1.16110',
      '4. close': '1.17223',
    },
    '2020-08-31': {
      '1. open': '1.17944',
      '2. high': '1.19661',
      '3. low': '1.16940',
      '4. close': '1.19370',
    },
    '2020-07-31': {
      '1. open': '1.12344',
      '2. high': '1.19088',
      '3. low': '1.11840',
      '4. close': '1.17710',
    },
    '2020-06-30': {
      '1. open': '1.11110',
      '2. high': '1.14225',
      '3. low': '1.10990',
      '4. close': '1.12350',
    },
    '2020-05-29': {
      '1. open': '1.09430',
      '2. high': '1.11452',
      '3. low': '1.07640',
      '4. close': '1.11069',
    },
    '2020-04-30': {
      '1. open': '1.10230',
      '2. high': '1.10374',
      '3. low': '1.07250',
      '4. close': '1.09430',
    },
  },
};
const mock_news_res = {
  items: '50',
  sentiment_score_definition:
    'x <= -0.35: Bearish; -0.35 < x <= -0.15: Somewhat-Bearish; -0.15 < x < 0.15: Neutral; 0.15 <= x < 0.35: Somewhat_Bullish; x >= 0.35: Bullish',
  relevance_score_definition:
    '0 < x <= 1, with a higher score indicating higher relevance.',
  feed: [
    {
      title:
        'Apple In AI Arms Race, Looks To Revamp Lagging Mac Sales - Apple  ( NASDAQ:AAPL ) , Amazon.com  ( NASDAQ:AMZN ) ',
      url: 'https://www.benzinga.com/news/24/04/38211401/apple-in-ai-arms-race-looks-to-revamp-lagging-mac-sales-report',
      time_published: '20240411T201924',
      authors: ['Anthony Noto'],
      summary:
        "Apple Inc. AAPL is trading higher on the heels of a new overhaul plan for its sluggish Mac line. What Happened: The laptop and desktop innovator released its first Macs with M3 chips just five months ago. And it's already gearing up to produce the next generation, according to Bloomberg News.",
      banner_image:
        'https://cdn.benzinga.com/files/images/story/2024/Apple-M1-MacBook-Air_1.jpeg?width=1200&height=800&fit=crop',
      source: 'Benzinga',
      category_within_source: 'News',
      source_domain: 'www.benzinga.com',
      topics: [
        {
          topic: 'Retail & Wholesale',
          relevance_score: '0.333333',
        },
        {
          topic: 'Financial Markets',
          relevance_score: '0.161647',
        },
        {
          topic: 'Manufacturing',
          relevance_score: '0.333333',
        },
        {
          topic: 'Technology',
          relevance_score: '0.333333',
        },
      ],
      overall_sentiment_score: 0.124107,
      overall_sentiment_label: 'Neutral',
      ticker_sentiment: [
        {
          ticker: 'MSFT',
          relevance_score: '0.150122',
          ticker_sentiment_score: '0.184409',
          ticker_sentiment_label: 'Somewhat-Bullish',
        },
        {
          ticker: 'GOOG',
          relevance_score: '0.150122',
          ticker_sentiment_score: '-0.078538',
          ticker_sentiment_label: 'Neutral',
        },
        {
          ticker: 'META',
          relevance_score: '0.223522',
          ticker_sentiment_score: '0.110611',
          ticker_sentiment_label: 'Neutral',
        },
        {
          ticker: 'NVDA',
          relevance_score: '0.223522',
          ticker_sentiment_score: '0.136739',
          ticker_sentiment_label: 'Neutral',
        },
        {
          ticker: 'AAPL',
          relevance_score: '0.429845',
          ticker_sentiment_score: '-0.005802',
          ticker_sentiment_label: 'Neutral',
        },
        {
          ticker: 'TSLA',
          relevance_score: '0.150122',
          ticker_sentiment_score: '0.0',
          ticker_sentiment_label: 'Neutral',
        },
        {
          ticker: 'AMZN',
          relevance_score: '0.150122',
          ticker_sentiment_score: '0.0',
          ticker_sentiment_label: 'Neutral',
        },
      ],
    },
    {
      title: 'Stock Market Today: Nasdaq Leads as Magnificent 7 Stocks Rise',
      url: 'https://www.kiplinger.com/investing/stocks/stock-market-today-nasdaq-leads-as-magnificent-7-stocks-rise',
      time_published: '20240411T201349',
      authors: ['Karee Venema'],
      summary:
        "Stocks were volatile Thursday as investors took in more inflation data and considered how it could impact the Federal Reserve's plans for interest rates. Wall Street also looked ahead to first-quarter earnings season, which unofficially kicks off tomorrow as several big banks report.",
      banner_image:
        'https://cdn.mos.cms.futurecdn.net/hwgJ7osrMtUWhk5koeVme7-320-80.png',
      source: 'Kiplinger',
      category_within_source: 'n/a',
      source_domain: 'www.kiplinger.com',
      topics: [
        {
          topic: 'Economy - Monetary',
          relevance_score: '0.769861',
        },
        {
          topic: 'Retail & Wholesale',
          relevance_score: '0.333333',
        },
        {
          topic: 'Financial Markets',
          relevance_score: '0.77141',
        },
        {
          topic: 'Manufacturing',
          relevance_score: '0.333333',
        },
        {
          topic: 'Earnings',
          relevance_score: '0.996675',
        },
        {
          topic: 'Technology',
          relevance_score: '0.333333',
        },
      ],
      overall_sentiment_score: 0.189403,
      overall_sentiment_label: 'Somewhat-Bullish',
      ticker_sentiment: [
        {
          ticker: 'NKE',
          relevance_score: '0.290952',
          ticker_sentiment_score: '0.271213',
          ticker_sentiment_label: 'Somewhat-Bullish',
        },
        {
          ticker: 'NVDA',
          relevance_score: '0.118647',
          ticker_sentiment_score: '0.196478',
          ticker_sentiment_label: 'Somewhat-Bullish',
        },
        {
          ticker: 'AAPL',
          relevance_score: '0.118647',
          ticker_sentiment_score: '0.196478',
          ticker_sentiment_label: 'Somewhat-Bullish',
        },
        {
          ticker: 'FDS',
          relevance_score: '0.059488',
          ticker_sentiment_score: '0.195026',
          ticker_sentiment_label: 'Somewhat-Bullish',
        },
        {
          ticker: 'KMX',
          relevance_score: '0.17715',
          ticker_sentiment_score: '0.030351',
          ticker_sentiment_label: 'Neutral',
        },
      ],
    },
    {
      title:
        'Apple Eyes Higher Profitability, Premium Mix and In-House Technologies Drive Margin Boost: Analyst',
      url: 'https://markets.businessinsider.com/news/stocks/apple-eyes-higher-profitability-premium-mix-and-in-house-technologies-drive-margin-boost-analyst-1033242295',
      time_published: '20240411T183614',
      authors: ['Anusuya Lahiri'],
      summary:
        "BofA analyst Wamsi Mohan maintained a Buy rating on Apple Inc ( NASDAQ:AAPL ) with a price target of $225. Mohan noted that historically, Apple investors have tended to look at existing products and the profitability associated with those products and services to measure the company's future ...",
      banner_image:
        'https://cdn.benzinga.com/files/imagecache/1024x768xUP/images/story/2024/Apple-iPhone-15-Pro-lineup-color-lineup-.jpeg',
      source: 'Business Insider',
      category_within_source: 'GoogleRSS',
      source_domain: 'markets.businessinsider.com',
      topics: [
        {
          topic: 'Earnings',
          relevance_score: '0.108179',
        },
        {
          topic: 'Technology',
          relevance_score: '1.0',
        },
        {
          topic: 'Financial Markets',
          relevance_score: '0.538269',
        },
      ],
      overall_sentiment_score: -0.038278,
      overall_sentiment_label: 'Neutral',
      ticker_sentiment: [
        {
          ticker: 'AAPL',
          relevance_score: '0.714306',
          ticker_sentiment_score: '0.122738',
          ticker_sentiment_label: 'Neutral',
        },
      ],
    },
    {
      title:
        'Apple plans to overhaul entire Mac Line with AI-focused M4 processors',
      url: 'https://www.business-standard.com/companies/news/apple-plans-to-overhaul-entire-mac-line-with-ai-focused-m4-processors-124041101001_1.html',
      time_published: '20240411T182448',
      authors: ['Bloomberg'],
      summary:
        'Apple Inc., aiming to boost sluggish computer sales, is preparing to overhaul its entire Mac line with a new family of in-house processors designed to highlight artificial intelligence.',
      banner_image:
        'https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/05/full/1712279594-4255.jpg?im=FeatureCrop,size=(826,465)',
      source: 'Business Standard',
      category_within_source: 'GoogleRSS',
      source_domain: 'www.business-standard.com',
      topics: [
        {
          topic: 'Technology',
          relevance_score: '0.5',
        },
        {
          topic: 'Manufacturing',
          relevance_score: '0.5',
        },
      ],
      overall_sentiment_score: 0.212739,
      overall_sentiment_label: 'Somewhat-Bullish',
      ticker_sentiment: [
        {
          ticker: 'ARM',
          relevance_score: '0.04912',
          ticker_sentiment_score: '0.281293',
          ticker_sentiment_label: 'Somewhat-Bullish',
        },
        {
          ticker: 'AAPL',
          relevance_score: '0.04912',
          ticker_sentiment_score: '0.162007',
          ticker_sentiment_label: 'Somewhat-Bullish',
        },
        {
          ticker: 'INTC',
          relevance_score: '0.04912',
          ticker_sentiment_score: '0.136043',
          ticker_sentiment_label: 'Neutral',
        },
      ],
    },
    {
      title:
        'Apple Eyes Higher Profitability, Premium Mix and In-House Technologies Drive Margin Boost: Analyst - Apple  ( NASDAQ:AAPL ) , Vanguard Information Tech ETF  ( ARCA:VGT ) ',
      url: 'https://www.benzinga.com/news/24/04/38208931/apple-eyes-higher-profitability-premium-mix-and-in-house-technologies-drive-margin-boost-analyst',
      time_published: '20240411T181427',
      authors: ['Anusuya Lahiri'],
      summary:
        "BofA analyst Wamsi Mohan maintained a Buy rating on Apple Inc AAPL with a price target of $225. Mohan noted that historically, Apple investors have tended to look at existing products and the profitability associated with those products and services to measure the company's future performance.",
      banner_image:
        'https://cdn.benzinga.com/files/images/story/2024/Apple-iPhone-15-Pro-lineup-color-lineup-.jpeg?width=1200&height=800&fit=crop',
      source: 'Benzinga',
      category_within_source: 'Trading',
      source_domain: 'www.benzinga.com',
      topics: [
        {
          topic: 'Earnings',
          relevance_score: '0.108179',
        },
        {
          topic: 'Technology',
          relevance_score: '1.0',
        },
        {
          topic: 'Financial Markets',
          relevance_score: '0.684621',
        },
      ],
      overall_sentiment_score: 0.00241,
      overall_sentiment_label: 'Neutral',
      ticker_sentiment: [
        {
          ticker: 'AAPL',
          relevance_score: '0.744851',
          ticker_sentiment_score: '0.120963',
          ticker_sentiment_label: 'Neutral',
        },
      ],
    },
    {
      title:
        'Best Buy, Mercedes Benz, and ADT Are All Making Custom AI Chatbots With Technology from the Same Company - ADT  ( NYSE:ADT ) , Apple  ( NASDAQ:AAPL ) ',
      url: 'https://www.benzinga.com/news/24/04/38190139/best-buy-mercedes-benz-and-adt-are-all-making-custom-ai-chatbots-with-technology-from-the-same-compa',
      time_published: '20240411T181103',
      authors: ['MarketBeat'],
      summary:
        "Google announced on Tuesday that household name companies, including Best Buy BBY, Mercedes Benz MBGAF, and ADT ADT, are now using its Gemini AI technology to build custom chatbots - meaning that Google's AI will soon play a part in everything from troubleshooting problems with a Best Buy ...",
      banner_image:
        'https://cdn.benzinga.com/files/images/story/2024/04/11/pawel-czerwinski-fpzzev0uqwa-unsplash.jpg?width=1200&height=800&fit=crop',
      source: 'Benzinga',
      category_within_source: 'Trading',
      source_domain: 'www.benzinga.com',
      topics: [
        {
          topic: 'Technology',
          relevance_score: '0.5',
        },
        {
          topic: 'Retail & Wholesale',
          relevance_score: '0.5',
        },
      ],
      overall_sentiment_score: 0.11592,
      overall_sentiment_label: 'Neutral',
      ticker_sentiment: [
        {
          ticker: 'BBY',
          relevance_score: '0.475251',
          ticker_sentiment_score: '0.109585',
          ticker_sentiment_label: 'Neutral',
        },
        {
          ticker: 'GOOG',
          relevance_score: '0.328455',
          ticker_sentiment_score: '-0.070706',
          ticker_sentiment_label: 'Neutral',
        },
        {
          ticker: 'AAPL',
          relevance_score: '0.167904',
          ticker_sentiment_score: '-0.147275',
          ticker_sentiment_label: 'Neutral',
        },
      ],
    },
  ],
};
export {
  currency,
  mockMonthlyData,
  mockSearchRes,
  mock_fx_daily_res,
  mock_fx_weekly_res,
  mock_fx_monthly_res,
  mock_news_res,
};