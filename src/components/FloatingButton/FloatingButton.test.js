import {fireEvent, render} from '@testing-library/react-native';

import {FloatingButton} from '.';
import React from 'react';

describe('FloatingButton', () => {
  it('renders correctly', () => {
    const {getByText} = render(<FloatingButton onPress={() => {}} />);
    expect(getByText('Goto Currency Rates')).toBeTruthy();
  });

  it('calls onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(<FloatingButton onPress={onPressMock} />);
    fireEvent.press(getByText('Goto Currency Rates'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
