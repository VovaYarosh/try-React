import axios from 'axios'

import * as actions from "./index"

export const addTodo = (todo) => {
    return {
        type: actions.ADD_TODO,
        todo
    }
}

export const getTodos = () => {
    return function (dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => dispatch({type:actions.GET_TODOS, todos: res.data}))
    }
}