import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  ListRenderItemInfo,
} from 'react-native';
import React, {FC, useState} from 'react';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TRideOptionsData} from '../interfaces/RideOptions';
import {TSetTravel} from '../interfaces/NavInitialState';
import {useAppSelector} from '../redux/store/store';
import {selectTravelTimeInformation} from '../redux/slices/navSlice';

export const rideOptionData: TRideOptionsData[] = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },

  {
    id: 'Uber-X-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },

  {
    id: 'Uber-X-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

const SURGE_CHARGE_RATE: number = 1.5;

const RideOptionsCard: FC = props => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [selected, setSelected] = useState<TRideOptionsData | null>(null);
  const travelTimeInformation: TSetTravel = useAppSelector(
    selectTravelTimeInformation,
  );

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>

      <FlatList
        data={rideOptionData}
        keyExtractor={(item: TRideOptionsData) => item.id}
        renderItem={({item}: ListRenderItemInfo<TRideOptionsData>) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              item?.id === selected?.id ? 'bg-gray-200' : ''
            }`}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{uri: item.image}}
            />

            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold mt-2`}>{item.title}</Text>
              <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'GBP',
              }).format(
                (Number(travelTimeInformation?.duration.value) *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100,
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 ${!selected ? 'bg-gray-300' : ''}`}>
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
