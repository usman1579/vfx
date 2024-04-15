import React, {useEffect} from 'react';
import LinearBg from './components/LinearBg';
import Header from './components/Header/Header';
import StockChart from './components/StockChart';
import {useDispatch, useSelector} from 'react-redux';
import Loader from './components/Loader';
import {fetchMonthlyRatings} from './redux/apiThunks';

const StockDetail = ({navigation, route}) => {
  const {
    params: {tickerSymbol},
  } = route;
  const ratesData = useSelector(state => state.api.monthlyRates);
  const loading = useSelector(state => state.api.monthlyRatesLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMonthlyRatings({tickerSymbol}));
  }, [dispatch, tickerSymbol]);

  return (
    <LinearBg>
      <Header
        title={tickerSymbol ? `${tickerSymbol} Stock Details` : 'Stock Details'}
        onBack={() => navigation.goBack()}
      />
      {ratesData && (
        <StockChart
          dates={ratesData?.dates}
          closingPrices={ratesData?.closingPrices}
          keyStats={ratesData?.keyStats}
        />
      )}

      <Loader loading={loading} />
    </LinearBg>
  );
};

export default StockDetail;
