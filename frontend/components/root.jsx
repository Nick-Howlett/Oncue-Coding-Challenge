import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './app_container';

export default ({ store }) => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
);  