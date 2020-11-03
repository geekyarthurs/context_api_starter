import { TodoAction } from "../actions/todoActions";
import { ITodoContext } from "../TodoContext";

function todoReducer(state: ITodoContext, action: TodoAction): ITodoContext{

    switch(action.type){
        case 'ADD_TODO':
            return {  ...state,  todos: [...state.todos, action.todo ] }
        default:
            return state
    }

}

export default todoReducer;