import { configureStore } from '@reduxjs/toolkit';
import dataSlice from "./slices/dataSlice";
//------------------------------
//          Reducers
//------------------------------

export const store = configureStore({
  reducer: {
    data: dataSlice
  },
})
