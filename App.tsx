import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import Home from './src/screens/Home/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Map from './src/screens/Map/Map';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Map"
              component={Map}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
