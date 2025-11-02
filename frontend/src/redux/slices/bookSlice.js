import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { request_get } from "../requests";
import { action_get } from "../actions";

const entityName = "books";

// При выполнении экшна будет обработано 2 состояния: запрос отправлен и запрос выполнен/отклонен
export const getAllBooks = createAsyncThunk(
  `${entityName}/read`, // долнжо быть уникальным, префикс
  action_get("books")
  // async (url) => {
  //   const fullURL = `http://localhost:3001/api/books`;
  //   console.log("fullURL: ", fullURL);
  //   try {
  //     const response = await fetch(fullURL, {
  //       method: "GET",
  //       // credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     console.log("DATA FROM API: ", data);
  //     return data;
  //   } catch (error) {
  //     // Logger here for signalize us about backend API shutdown
  //     return {
  //       code: 500,
  //       message: "Server is shutdown!",
  //     };
  //   }
  // }
);

const initialState = {
  success: false,
  error: null,
  data: [],
  x: 0,
};

export const counterSlice = createSlice({
  name: entityName,
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.x += 1;
    },
    decrement: (state) => {
      state.x -= 1;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      // console.log("action: ", action.payload);
      if (action.payload.items) {
        state.data = action.payload.items;
        state.success = true;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
