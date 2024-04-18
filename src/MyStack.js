import * as React from 'react';

import CurrencyRatesScreen from './CurrencyRatesScreen';
import MainScreen from './MainScreen';
import {MyStatusBar} from './components';
import {NavigationContainer} from '@react-navigation/native';
import StockDetail from './StockDetail';
import colors from './constant/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <MyStatusBar backgroundColor={colors.bg1} barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="StockDetail" component={StockDetail} />
        <Stack.Screen name="CurrencyRate" component={CurrencyRatesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
