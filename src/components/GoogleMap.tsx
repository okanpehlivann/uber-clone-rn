import React, {FC, useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import {useAppDispatch, useAppSelector} from '../redux/store/store';
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from '../redux/slices/navSlice';
import {TSetLocation} from '../interfaces/NavInitialState';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '@env';

const GoogleMap: FC = props => {
  const origin: TSetLocation = useAppSelector(selectOrigin);
  const destionation: TSetLocation = useAppSelector(selectDestination);
  const mapRef = useRef<MapView | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!origin || !destionation) return;

    // Zoom & fit to markers
    mapRef?.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
    });
  }, [origin, destionation]);

  useEffect(() => {
    if (!origin || !destionation) return;

    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial&origins=${origin.description}&destinations=${destionation.description}
      &key=${GOOGLE_MAPS_APIKEY}`)
        .then(res => res.json())
        .then(data => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };

    getTravelTime();
  }, [origin, destionation, GOOGLE_MAPS_APIKEY]);

  return (
    <MapView
      ref={ref => {
        mapRef.current = ref as MapView;
      }}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location?.lat ?? 0,
        longitude: origin?.location?.lng ?? 0,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {origin && destionation && (
        <MapViewDirections
          origin={origin?.description}
          destination={destionation?.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

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

      {destionation?.location && (
        <Marker
          coordinate={{
            latitude: destionation?.location.lat,
            longitude: destionation?.location.lng,
          }}
          title="Destination"
          description={destionation?.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default GoogleMap;
