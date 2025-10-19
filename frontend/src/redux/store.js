import { combineReducers, configureStore } from "@reduxjs/toolkit";

import bookSlice from "./slices/bookSlice";

const entitiesReducer = combineReducers({
  books: bookSlice,
});

export const store = configureStore({
  reducer: {
    entities: entitiesReducer,
    message: {},
    flagger: {},
    identity: {},
  },
});
