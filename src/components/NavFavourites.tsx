import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import React, {FC} from 'react';
import {
  TNavFavouritesData,
  TNavFavouritesProps,
} from '../interfaces/NavFavourites';
import {Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const NavFavourites: FC<TNavFavouritesProps> = props => {
  return (
    <FlatList
      testID={props.secondTestID}
      style={{height: '40%'}}
      data={props?.navFavouritesData}
      keyExtractor={(item: TNavFavouritesData) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, {height: 0.5}]} />
      )}
      renderItem={({item}: ListRenderItemInfo<TNavFavouritesData>) => (
        <TouchableOpacity
          testID={
            props?.navFavouritesData.length === Number(item.id)
              ? props.testID
              : ''
          }
          style={tw`flex-row items-center p-5`}>
          <Icon
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-600`}>{item.destination}</Text>
            <Text style={tw`text-gray-600`}>
              {item.id} - {props?.navFavouritesData.length}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
