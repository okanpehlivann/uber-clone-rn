import {Point} from 'react-native-google-places-autocomplete';

export type InitialState = {
  origin: any;
  destination: any;
  travelTimeInformation: any;
};

export type TSetLocation = {
  location: Point | undefined;
  description: string | undefined;
};
