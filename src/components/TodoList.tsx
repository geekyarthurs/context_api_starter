import * as React from "react";
import TodoContext from "../context/TodoContext";
import { ITodo } from "./TodoManager";

class TodoList extends React.Component<{}> {
  static contextType = TodoContext;
  constructor(props = {}) {
    super(props);
  }
  render() {
    const { todos } = this.context;
    return (
      <ul>
        <li>Test</li>
        {todos.map((todo: ITodo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    );
  }
}

export default TodoList;
