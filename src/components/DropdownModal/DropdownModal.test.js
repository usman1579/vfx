import {fireEvent, render} from '@testing-library/react-native';

import {DropdownModal} from '.';
import {Pressable} from 'react-native';
import React from 'react';

// Mock the close function
const mockClose = jest.fn();

describe('DropdownModal', () => {
  it('renders correctly when modal is visible', () => {
    const {getByTestId} = render(
      <DropdownModal
        modalVisible={true}
        close={mockClose}
        content={<Pressable testID="content" />}
      />,
    );
    expect(getByTestId('modal')).toBeTruthy();
  });

  it('does not render when modal is not visible', () => {
    const {queryByTestId} = render(
      <DropdownModal
        modalVisible={false}
        close={mockClose}
        content={<Pressable testID="content" />}
      />,
    );
    expect(queryByTestId('modal')).toBeNull();
  });

  it('calls close function when modal is pressed', () => {
    const {getByTestId} = render(
      <DropdownModal
        modalVisible={true}
        close={mockClose}
        content={<Pressable testID="content" />}
      />,
    );

    // Get the Pressable element wrapping the modal
    const modalPressable = getByTestId('modal-pressable');

    // Simulate a press event on the Pressable element
    fireEvent.press(modalPressable);

    // Expect that the close function has been called
    expect(mockClose).toHaveBeenCalled();
  });

  it('renders provided content', () => {
    const {getByTestId} = render(
      <DropdownModal
        modalVisible={true}
        close={mockClose}
        content={<Pressable testID="content" />}
      />,
    );
    expect(getByTestId('content')).toBeTruthy();
  });
});
