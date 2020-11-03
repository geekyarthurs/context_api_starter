import * as React from "react";
import { Component, ChangeEvent, MouseEvent } from "react";
import { Input } from "../ui-components/Input";
import { Button } from "../ui-components/Button";
import TodoContext, { ITodoContext } from "../context/TodoContext";
import { addTodo } from "../context/actions/todoActions";
import { v4 as uuid } from "uuid";
export interface AddTodoProps {}

export interface AddTodoState {
  text: string;
}

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
  static contextType = TodoContext;
  context!: React.ContextType<typeof TodoContext>;

  handleClick(event: MouseEvent<HTMLButtonElement>) {
    const { dispatch } = this.context;
    dispatch(addTodo({ id: uuid(), title: this.state.text }));
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ text: event.currentTarget.value });
  }

  constructor(props: AddTodoProps) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div>
        <Input
          value={this.state.text}
          type="text"
          placeholder="Add Todo"
          onChange={this.handleChange}
        />

        <Button onClick={this.handleClick}>Add Todo</Button>
      </div>
    );
  }
}

export default AddTodo;
