import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addNewTodo(state, action) {
      const newTodo = action.payload;
      state.todos.unshift({
        id: newTodo.id,
        todo: newTodo.todo,
        isCompleted: false,
      });
    },
    completeTodo(state, action) {
      const id = action.payload;
      const findTodo = state.todos.find((todo) => todo.id === id);
      findTodo.isCompleted = !findTodo.isCompleted;
    },
    removeTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    removeAll(state) {
      state.todos = state.todos.filter((todo) => todo.isCompleted !== true);
    },
  },
});

export const todoSliceActions = todoSlice.actions;
export default todoSlice.reducer;
