import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import {useAppDispatch} from '../redux/store/store';
import {setDestination} from '../redux/slices/navSlice';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavFavourites from './NavFavourites';
import {navFavouritesData} from '../screens/Home/Home';
import {Icon} from 'react-native-elements';

const NavigateCard = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Okan</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where To?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            fetchDetails={true}
            onPress={(
              data: GooglePlaceData | null,
              details: GooglePlaceDetail | null = null,
            ) => {
              dispatch(
                setDestination({
                  location: details?.geometry?.location,
                  description: data?.description,
                }),
              );

              navigation.navigate('RideOptionsCard');
            }}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            enablePoweredByContainer={false}
            styles={inputStyle}
          />
        </View>

        <NavFavourites navFavouritesData={navFavouritesData} />
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly mt-auto py-2 border-t border-gray-100`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row bg-black w-24 justify-between px-4 py-3 rounded-full`}>
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const inputStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },

  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },

  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
