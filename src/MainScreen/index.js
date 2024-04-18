import {FloatingButton, LinearBg} from '../components';

import React from 'react';
import Search from '../Search';
import StockNews from '../StockNews';

const MainScreen = ({navigation}) => {
  const onPress = () => navigation.navigate('CurrencyRate');
  return (
    <LinearBg>
      <Search />
      <StockNews />
      <FloatingButton onPress={onPress} />
    </LinearBg>
  );
};
export default MainScreen;
