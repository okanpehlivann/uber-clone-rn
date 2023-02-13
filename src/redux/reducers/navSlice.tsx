import {PayloadAction} from '@reduxjs/toolkit';
import {InitialState, TSetLocation} from '../../interfaces/NavInitialState';

export const navSliceReducers = {
  setOrigin: (state: InitialState, action: PayloadAction<TSetLocation>) => {
    state.origin = action.payload;
  },

  setDestination(state: InitialState, action: PayloadAction<TSetLocation>) {
    state.destination = action.payload;
  },

  setTravelTimeInformation(state: InitialState, action: PayloadAction<any>) {
    state.travelTimeInformation = action.payload;
  },
};
