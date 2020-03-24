import axios from 'axios'

import * as actions from "./index"

export const addTodo = (todo) => {
    return {
        type: actions.ADD_TODO,
        todo
    };
};

export const getTodos = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            dispatch({type:actions.GET_TODOS, todos: res.data});
    };

export const deleteTodo = id => {
    return {
        type: actions.DELETE_TODO,
        id
    }
}