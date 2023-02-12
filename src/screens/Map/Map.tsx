import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';

const Map: FC = props => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Here is the map stuff</Text>
    </View>
  );
};

export default Map;
