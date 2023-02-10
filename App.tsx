import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import Home from './src/screens/Home/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
