import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
    user:userSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
