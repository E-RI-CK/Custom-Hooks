import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";


const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del Alma',
    //     done: false
    // },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del Tiempo',
        done: false
    }
];

const init = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    return storedTodos || initialState;
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const onNewTodo = (value) => {

        const action = {
            type: 'Add',
            payload: value
        }

        dispatch(action);
    }

    const removeTodo = (id) => {
        dispatch({
            type: 'Remove',
            payload: id
        })
    }


    const onToggleTodo = (id) => {
        dispatch({
            type: 'Toggle',
            payload: id
        })
    }

    return {
        todos,
        onNewTodo,
        removeTodo,
        onToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(el => !el.done).length,
    }
}
