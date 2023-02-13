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

export type TSetTravel = {
  distance: Time;
  duration: Time;
  status: string;
};

export type Time = {
  text: string;
  value: string;
};
