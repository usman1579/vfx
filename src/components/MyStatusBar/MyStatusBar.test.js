import React from 'react';
import {shallow} from 'enzyme';
import MyStatusBar from './MyStatusBar'; // Import the MyStatusBar component
import {SafeAreaView, StatusBar} from 'react-native';

// Mock the necessary constants
jest.mock('../../constant/colors', () => ({
  border: 'red', // Mocking the color value for testing purposes
}));

// Define a describe block for the MyStatusBar component tests
describe('MyStatusBar component', () => {
  // Test case for rendering the MyStatusBar component
  it('renders correctly', () => {
    // Render the MyStatusBar component with backgroundColor set to 'red'
    const wrapper = shallow(<MyStatusBar backgroundColor="red" />);

    // Expect that the component renders a SafeAreaView
    expect(wrapper.find(SafeAreaView).exists()).toBe(true);

    // Expect that the component renders a StatusBar
    expect(wrapper.find(StatusBar).exists()).toBe(true);

    // Expect that the StatusBar component receives the correct props
    expect(wrapper.find(StatusBar).prop('translucent')).toBe(true);
    expect(wrapper.find(StatusBar).prop('backgroundColor')).toBe('red');
  });
});
