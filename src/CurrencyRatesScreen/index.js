import {
  CurrencyDropdown,
  Header,
  LinearBg,
  Loader,
  StockChart,
  TimePeriodDropdown,
} from '../components';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {setIsOpen, setIsOpenTwo} from '../redux/dataSlice';
import {useDispatch, useSelector} from 'react-redux';

import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../constant/colors';
import {fetchLiveRatings} from '../redux/apiThunks';

const CurrencyRatesScreen = ({navigation}) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('EUR');
  const [timePeriod, setPeriod] = useState('Daily');
  const isOpen = useSelector(state => state.data.isOpen);
  const isOpenTwo = useSelector(state => state.data.isOpenTwo);
  const ratesData = useSelector(state => state.api.liveRates);
  const loading = useSelector(state => state.api.ratesLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchLiveRatings({
        timePeriod,
        baseCurrency,
        quoteCurrency,
      }),
    );
  }, [baseCurrency, quoteCurrency, timePeriod, dispatch]);
  const handleRefresh = async () => {
    dispatch(
      fetchLiveRatings({
        timePeriod,
        baseCurrency,
        quoteCurrency,
      }),
    );
  };

  return (
    <LinearBg>
      <View style={styles.container}>
        <Header
          title={'Currency Rates'}
          refresh={handleRefresh}
          onBack={() => navigation.goBack()}
        />
        <View style={styles.mainView}>
          <View style={styles.dropdownContainer}>
            <CurrencyDropdown
              selectedCurrency={baseCurrency}
              onCurrencyChange={setBaseCurrency}
              toCurrency={quoteCurrency}
              isOpen={isOpen}
              setIsOpen={val => dispatch(setIsOpen(val))}
            />
            <Octicons name="arrow-switch" size={14} color={colors.icon} />
            <CurrencyDropdown
              selectedCurrency={quoteCurrency}
              onCurrencyChange={setQuoteCurrency}
              toCurrency={baseCurrency}
              isOpen={isOpenTwo}
              setIsOpen={val => dispatch(setIsOpenTwo(val))}
            />
          </View>

          <TimePeriodDropdown
            selectedPeriod={timePeriod}
            onPeriodChange={setPeriod}
          />
        </View>

        {ratesData && (
          <StockChart
            dates={ratesData?.dates}
            closingPrices={ratesData?.closingPrices}
            keyStats={ratesData?.keyStats}
          />
        )}
        <Loader loading={loading} />
      </View>
    </LinearBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '55%',
  },
  mainView: {alignItems: 'center', marginTop: 20},
});

export default CurrencyRatesScreen;
