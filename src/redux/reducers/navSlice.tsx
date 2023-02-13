import {PayloadAction} from '@reduxjs/toolkit';
import {
  InitialState,
  TSetLocation,
  TSetTravel,
} from '../../interfaces/NavInitialState';

export const navSliceReducers = {
  setOrigin: (state: InitialState, action: PayloadAction<TSetLocation>) => {
    state.origin = action.payload;
  },

  setDestination(state: InitialState, action: PayloadAction<TSetLocation>) {
    state.destination = action.payload;
  },

  setTravelTimeInformation(
    state: InitialState,
    action: PayloadAction<TSetTravel>,
  ) {
    state.travelTimeInformation = action.payload;
  },
};
