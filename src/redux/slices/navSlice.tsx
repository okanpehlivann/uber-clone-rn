import {createSlice} from '@reduxjs/toolkit';
import {InitialState} from '../../interfaces/NavInitialState';
import {navSliceReducers} from '../reducers/navSlice';

const initialState: InitialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: navSliceReducers,
});

export const {setOrigin, setDestination, setTravelTimeInformation} =
  navSlice.actions;

// Selectors
export const selectOrigin = (state: any) => state.nav.origin;
export const selectDestination = (state: any) => state.nav.destination;
export const selectTravelTimeInformation = (state: any) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
