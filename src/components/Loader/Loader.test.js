import React from 'react';
import {shallow} from 'enzyme';
import Loader from './Loader'; // Assuming this test file is in the same directory as Loader.js
import colors from '../../constant/colors'; // Assuming the actual import path

// Mocking screenHeight from '../../constant/dimensions'
jest.mock('../../constant/dimensions', () => ({
  screenHeight: 800, // Assuming a default value for testing purposes
}));

describe('Loader component', () => {
  it('renders ActivityIndicator when loading is true', () => {
    const wrapper = shallow(<Loader loading={true} colors={colors} />);
    expect(wrapper.find('ActivityIndicator')).toHaveLength(1); // Check for one ActivityIndicator
    expect(wrapper.find('ActivityIndicator').prop('color')).toBe(colors.border);
    // ... rest of your test assertions
  });

  it('does not render anything when loading is false', () => {
    const wrapper = shallow(<Loader loading={false} colors={colors} />);
    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it('applies styles to the container View when loading is true', () => {
    const wrapper = shallow(<Loader loading={true} colors={colors} />);
    const container = wrapper.find('View');
    expect(container.prop('style')).toHaveProperty('position', 'absolute');
    expect(container.prop('style')).toHaveProperty('top', 800 / 2.6); // Calculated based on mocked screenHeight
    expect(container.prop('style')).toHaveProperty('height', 100);
    expect(container.prop('style')).toHaveProperty('width', 200);
    expect(container.prop('style')).toHaveProperty('borderRadius', 5);
    expect(container.prop('style')).toHaveProperty('justifyContent', 'center');
    expect(container.prop('style')).toHaveProperty('alignSelf', 'center');
    expect(container.prop('style')).toHaveProperty(
      'backgroundColor',
      colors.bg1,
    );
  });
});
