import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";

const store = configureStore({
  reducer: {
    usersRepository: usersReducer,
  },
});

export default store;