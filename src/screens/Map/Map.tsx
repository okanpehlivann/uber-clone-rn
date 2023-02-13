import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import tw from 'tailwind-react-native-classnames';
import GoogleMap from '../../components/GoogleMap';
import {createStackNavigator} from '@react-navigation/stack';
import NavigateCard from '../../components/NavigateCard';
import RideOptionsCard from '../../components/RideOptionsCard';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Map: FC = props => {
  const Stack = createStackNavigator();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" />
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <GoogleMap />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
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
