import {fireEvent, render} from '@testing-library/react-native';

import React from 'react';
import {TimePeriodDropdown} from '.';

// Mock the onPeriodChange function
const mockOnPeriodChange = jest.fn();

describe('TimePeriodDropdown', () => {
  it('renders correctly with initial selected period', () => {
    const {getByText} = render(
      <TimePeriodDropdown
        selectedPeriod="Daily"
        onPeriodChange={mockOnPeriodChange}
      />,
    );
    expect(getByText('Daily')).toBeTruthy();
  });

  it('opens dropdown when pressed', () => {
    const {getByText, getByTestId} = render(
      <TimePeriodDropdown
        selectedPeriod="Daily"
        onPeriodChange={mockOnPeriodChange}
      />,
    );
    fireEvent.press(getByText('Daily')); // Press on the dropdown text
    expect(getByTestId('dropdown-list')).toBeTruthy();
  });

  it('calls onPeriodChange with selected period when an item is selected', () => {
    const {getByText} = render(
      <TimePeriodDropdown
        selectedPeriod="Daily"
        onPeriodChange={mockOnPeriodChange}
      />,
    );
    fireEvent.press(getByText('Daily')); // Open dropdown
    fireEvent.press(getByText('Weekly')); // Select Weekly
    expect(mockOnPeriodChange).toHaveBeenCalledWith('Weekly');
  });
});
