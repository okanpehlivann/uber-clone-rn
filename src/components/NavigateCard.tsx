import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
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

const NavigateCard = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Sonny</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
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
