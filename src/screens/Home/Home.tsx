import {
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
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
import NavFavourites from '../../components/NavFavourites';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getData} from '../../../service';
import {Icon} from 'react-native-elements';

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

const Home: FC = props => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useAppDispatch();
  const [navFavouritesData, setNavFavouritesData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getFavourities();
  }, []);

  const getFavourities = async () => {
    const data = await getData();
    if (data) {
      setNavFavouritesData(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View testID="home-view" style={tw`p-5`}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
            }}
            source={{
              uri: 'https://links.papareact.com/gzs',
            }}
          />
        </TouchableOpacity>

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

        {isLoading === true ? (
          <>
            <View
              testID="spinner"
              style={{
                backgroundColor: '#FFFFFF',
                height: 100,
                width: 100,
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <ActivityIndicator animating={isLoading} color="black" />
            </View>
          </>
        ) : (
          <>
            <NavFavourites
              testID="last-view"
              secondTestID="flat-list"
              navFavouritesData={navFavouritesData}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
