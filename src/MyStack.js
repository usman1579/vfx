import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import StockDetail from './StockDetail';
import MyStatusBar from './components/MyStatusBar/MyStatusBar';
import colors from './constant/colors';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
