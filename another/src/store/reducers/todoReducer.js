import * as actions from '../actions'

const initialState = {todos: null}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actions.GET_TODOS:
            return {...state,todos: action.todos}
        case actions.ADD_TODO:
            return {...state, todos: [action.todo,...state.todos]}
        default:
            return state
        case actions.DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
    }
}

export default  reducer