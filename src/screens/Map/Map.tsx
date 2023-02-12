import {View, Text} from 'react-native';
import React, {FC} from 'react';
import tw from 'tailwind-react-native-classnames';
import GoogleMap from '../../components/GoogleMap';
import {createStackNavigator} from '@react-navigation/stack';
import NavigateCard from '../../components/NavigateCard';
import RideOptionsCard from '../../components/RideOptionsCard';

const Map: FC = props => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <GoogleMap />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          // 2.18
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default Map;
