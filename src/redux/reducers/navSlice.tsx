import {PayloadAction} from '@reduxjs/toolkit';
import {InitialState, TSetOrigin} from '../../interfaces/NavInitialState';

export const navSliceReducers = {
  setOrigin: (state: InitialState, action: PayloadAction<TSetOrigin>) => {
    state.origin = action.payload;
  },

  setDestination(state: InitialState, action: PayloadAction<any>) {
    state.destination = action.payload;
  },

  setTravelTimeInformation(state: InitialState, action: PayloadAction<any>) {
    state.travelTimeInformation = action.payload;
  },
};
