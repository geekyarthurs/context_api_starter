import { ITodo } from "../TodoContext";

export function addTodo(todo: ITodo){
    return <const>{
        type: 'ADD_TODO',
        todo
    }
}

export type TodoAction = ReturnType<typeof addTodo>