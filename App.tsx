import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import Home from './src/screens/Home/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Map from './src/screens/Map/Map';
import {KeyboardAvoidingView, Platform} from 'react-native';
import Login from './src/screens/Login/Login';
import {Icon} from 'react-native-elements';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={Map} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeTabs}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Map"
                component={Map}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
