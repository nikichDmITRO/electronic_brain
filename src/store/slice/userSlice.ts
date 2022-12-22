import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

type TodosState = {
  arrTodo: User[];
};

const initialState: TodosState = {
  arrTodo: [],
};

export const getUsers = createAsyncThunk("post/deletePost", async (id) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      console.log("pend");
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
     state.arrTodo=action.payload
      console.log(action.payload);
      console.log(action);
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      console.log(" error");
    });
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
