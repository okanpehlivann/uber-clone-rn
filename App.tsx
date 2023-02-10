import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import Home from './src/screens/Home/Home';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
