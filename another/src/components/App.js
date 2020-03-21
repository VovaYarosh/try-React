import React from 'react'

import Todo from './Todo/Todo'

class App extends React.Component{
    state = {
        todos: [
            {id:1,title: "Todo 1"},
            {id:2,title: "Todo 2"},
            {id:3,title: "Todo 3"}
        ]
    }

    deleteTodo = (e, id) => {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    }

    render(){
        if (this.state.todos.length === 0){
            return <h1>no todos</h1>
        }
        return(
            <div>
                <h1>List of todo</h1>
                {this.state.todos.map((todo) =>{
                    return (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        deleteTodo={this.deleteTodo}
                    />
                    )
                })}
            </div>
        )
    }
}

export default App