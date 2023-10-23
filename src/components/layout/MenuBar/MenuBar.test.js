import React from 'react';
import { shallow } from 'enzyme';
import MenuBar from './MenuBar';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component MenuBar', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <MenuBar />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
