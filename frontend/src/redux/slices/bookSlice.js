import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { request_get } from "../requests";

const entityName = "books";

export const getAllBooks = createAsyncThunk(
  `${entityName}/read`,
  request_get("/books")
);

const initialState = {
  success: false,
  error: null,
  data: [],
};

export const counterSlice = createSlice({
  name: entityName,
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  //   extraReducers:
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
