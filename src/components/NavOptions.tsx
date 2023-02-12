import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {TNavOptionProps, TNavOptionsData} from '../interfaces/NavOptionsData';
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TSetOrigin} from '../interfaces/NavInitialState';
import {selectOrigin} from '../redux/slices/navSlice';
import {useAppSelector} from '../redux/store/store';

export type RootStackParamList = {
  YourScreen: {id: number} | undefined;
};

const NavOptions: FC<TNavOptionProps> = props => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const origin: TSetOrigin = useAppSelector(selectOrigin);

  return (
    <FlatList
      data={props.navOptionsData}
      horizontal
      keyExtractor={(item: TNavOptionsData) => item.id}
      renderItem={({item}: ListRenderItemInfo<TNavOptionsData>) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item?.screen)}
          disabled={!origin}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View style={tw`${origin ? '' : 'opacity-20'}`}>
            <Image
              style={{width: 120, height: 120, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
