import {fireEvent, render} from '@testing-library/react-native';

import {CurrencyDropdown} from '.';
import React from 'react';

// // Mock currency data
// const mockCurrencies = [
//   {
//     code: 'USD',
//     name: 'United States Dollar',
//     flag: require('../../assets/flags/us.png'),
//   },
//   {code: 'EUR', name: 'Euro', flag: require('../../assets/flags/eu.png')},
//   // Add more mock currencies as needed
// ];

describe('CurrencyDropdown', () => {
  it('renders correctly with initial selected currency', () => {
    const {getByText} = render(
      <CurrencyDropdown
        selectedCurrency="USD"
        onCurrencyChange={() => {}}
        isOpen={false}
        setIsOpen={() => {}}
      />,
    );
    expect(getByText('USD')).toBeTruthy();
  });

  it('opens dropdown when pressed', () => {
    const setIsOpenMock = jest.fn();
    const {getByTestId} = render(
      <CurrencyDropdown
        selectedCurrency="USD"
        onCurrencyChange={() => {}}
        isOpen={false}
        setIsOpen={setIsOpenMock}
      />,
    );
    fireEvent.press(getByTestId('dropdown-pressable'));
    expect(setIsOpenMock).toHaveBeenCalledWith(true);
  });

  it('calls onCurrencyChange with selected currency when an item is selected', () => {
    const onCurrencyChangeMock = jest.fn();
    const {getByText} = render(
      <CurrencyDropdown
        selectedCurrency="USD"
        onCurrencyChange={onCurrencyChangeMock}
        isOpen={true}
        setIsOpen={() => {}}
      />,
    );
    fireEvent.press(getByText('Euro (EUR)')); // Select Euro
    expect(onCurrencyChangeMock).toHaveBeenCalledWith('EUR');
  });
});
