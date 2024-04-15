import React from 'react';
import {Provider} from 'react-redux';
import MyStack from './src/MyStack';
import store from './src/redux/storeConfig';

const App = () => {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};

export default App;
