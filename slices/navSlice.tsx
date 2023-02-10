import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type InitialState = {
  origin: any;
  destination: any;
  travelTimeInformation: any;
};

const initialState: InitialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state: InitialState, action: PayloadAction<any>) => {
      state.origin = action.payload;
    },

    setDestination: (state: InitialState, action: PayloadAction<any>) => {
      state.destination = action.payload;
    },

    setTravelTimeInformation: (
      state: InitialState,
      action: PayloadAction<any>,
    ) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const {setOrigin, setDestination, setTravelTimeInformation} =
  navSlice.actions;

// Selectors
export const selectOrigin = (state: any) => state.nav.origin;
export const selectDestination = (state: any) => state.nav.destination;
export const selectTravelTimeInformation = (state: any) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
