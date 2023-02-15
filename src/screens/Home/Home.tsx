import {Text, SafeAreaView, Image, View} from 'react-native';
import React, {FC} from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../../components/NavOptions';
import {TNavOptionsData} from '../../interfaces/NavOptionsData';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {useAppDispatch} from '../../redux/store/store';
import {setOrigin} from '../../redux/slices/navSlice';
import {TNavFavouritesData} from '../../interfaces/NavFavourites';
import NavFavourites from '../../components/NavFavourites';

export const navOptionsData: TNavOptionsData[] = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'Map',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'Eats',
  },
];

export const navFavouritesData: TNavFavouritesData[] = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London, UK',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'London Eye, London, UK',
  },
];

const Home: FC = props => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View testID="home-view" style={tw`p-5`}>
        <Image
          testID="home-uber-image"
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          onPress={(
            data: GooglePlaceData | null,
            details: GooglePlaceDetail | null = null,
          ) => {
            dispatch(
              setOrigin({
                location: details?.geometry?.location,
                description: data?.description,
              }),
            );
          }}
          minLength={2}
          fetchDetails={true}
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          enablePoweredByContainer={false}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />

        <NavOptions navOptionsData={navOptionsData} />
        <NavFavourites navFavouritesData={navFavouritesData} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
