import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import CompanyClaim from './CompanyClaim';

describe('CompanyClaim', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <CompanyClaim />
      </Provider>
    );
  });
});
