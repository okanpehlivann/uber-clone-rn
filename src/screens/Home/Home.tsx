import {Text, SafeAreaView, Image, View} from 'react-native';
import React, {FC} from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../../components/NavOptions';
import {TNavOptionsData} from '../../interfaces/NavOptionsData';

export const navOptionsData: TNavOptionsData[] = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const Home: FC = props => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
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

        <NavOptions navOptionsData={navOptionsData} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
