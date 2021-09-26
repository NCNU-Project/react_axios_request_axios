import { createSlice } from "@reduxjs/toolkit";

const initialState = {data: []};

const filterSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setData } = filterSlice.actions;
