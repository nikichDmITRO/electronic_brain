import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  body: string;
};

type TodosState = {
  arrTodo: Todo[];
};

const initialState: TodosState = {
  arrTodo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.arrTodo.push({
        id: state.arrTodo.length,
        body: action.payload,
      });
    },
    delitTodo(state, action: PayloadAction<number>) {
      state.arrTodo=state.arrTodo.filter(todo=>todo.id!==action.payload)
    },
  },
});
export const { addTodo,delitTodo } = todoSlice.actions;
export default todoSlice.reducer;
