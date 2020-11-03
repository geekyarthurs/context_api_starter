import React, { useReducer } from "react";
import { Component } from "react";
import { ITodoContext } from "../TodoContext";
import todoReducer from "../reducers/todoReducer";
import TodoContext from "../TodoContext";

export interface TodoContextProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

const TodoContextProvider = (props: TodoContextProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    dispatch: () => {},
  } as ITodoContext);

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
