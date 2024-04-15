import React from 'react';
import LinearBg from './components/LinearBg';
import Search from './Search';
import StockNews from './StockNews';

const MainScreen = () => {
  return (
    <LinearBg>
      <Search />
      <StockNews />
    </LinearBg>
  );
};
export default MainScreen;
