import * as React from "react";
import { Container } from "../ui-components/Container";
import { v1 as uuid } from "uuid";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export interface ITodo {
  id: string;
  title: string;
}

class TodoManager extends React.Component<{}> {
  constructor(props = {}) {
    super(props);
    this.state = { todos: [] };
  }

  render() {
    return (
      <Container>
        <h1>Todos</h1>
        <AddTodo />
        <hr />
        <TodoList />
      </Container>
    );
  }
}

export default TodoManager;
