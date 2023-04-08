//notice name of file: lowercase C for first letter > this will be the case for ny file that will NOT export a React component.
//notice file is also plural

import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from "../../app/shared/CAMPSITES";

const initialState = {
  campsitesArray: CAMPSITES,
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
    (campsite) => campsite.id === parseInt(id)
  );
};

export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};
