import { createContext } from "react";

export interface ITodo {
  id: string;
  title: string;
}

export interface ITodoContext {
  todos: ITodo[];
  dispatch: Function;
}

const TodoContext = createContext<ITodoContext>({  } as ITodoContext);

export default TodoContext;
