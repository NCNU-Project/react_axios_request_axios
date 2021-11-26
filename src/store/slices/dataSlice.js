import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { read_student_with_axios, read_student_with_fetch } from "../../_services/api.services";

const initialState = {data: [], status: "loading"};

const createAsyncThunkWithNamedType = (frontName = "", api = null) => {
  return createAsyncThunk(`user/${frontName}`, async (data, thunkAPI) => {
    const response = await api();
    return response
  })
}

const buildFulfillExtraReducer = (builder, thunk) => {
    // add get By fetch test
    // pending
    builder.addCase(thunk.pending, (state, action) => {
      state.status = 'loading'
    })

    // success
    builder.addCase(thunk.fulfilled, (state, action) => {
      state.status = 'complete'
      state.data = action.payload
    })
}

export const getStuedntByFetchThunk = createAsyncThunkWithNamedType("getStuedntByFetch", read_student_with_fetch);
export const getStuedntByAxiosThunk = createAsyncThunkWithNamedType("getStuedntByAxios", read_student_with_axios);

const filterSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    }
  },extraReducers: (builder) => {
    buildFulfillExtraReducer(builder, getStuedntByFetchThunk);
    buildFulfillExtraReducer(builder, getStuedntByAxiosThunk);
  }
});

export default filterSlice.reducer;
export const { setData } = filterSlice.actions;
