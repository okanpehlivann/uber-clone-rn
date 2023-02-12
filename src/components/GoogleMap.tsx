import React, {FC} from 'react';
import MapView, {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import {useAppSelector} from '../redux/store/store';
import {selectOrigin} from '../redux/slices/navSlice';
import {TSetOrigin} from '../interfaces/NavInitialState';

const GoogleMap: FC = props => {
  const origin: TSetOrigin = useAppSelector(selectOrigin);

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location?.lat ?? 0,
        longitude: origin?.location?.lng ?? 0,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default GoogleMap;
