import MyStack from './src/MyStack';
import {Provider} from 'react-redux';
import React from 'react';
import store from './src/redux/storeConfig';

const App = () => {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};

export default App;
