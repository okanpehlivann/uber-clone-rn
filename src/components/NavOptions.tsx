import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {TNavOptionProps, TNavOptionsData} from '../interfaces/NavOptionsData';

const NavOptions: FC<TNavOptionProps> = props => {
  return (
    <FlatList
      data={props.navOptionsData}
      horizontal
      renderItem={({item}: ListRenderItemInfo<TNavOptionsData>) => (
        <TouchableOpacity>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
