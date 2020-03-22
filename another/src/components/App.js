import React from 'react'
import {Switch, Route} from 'react-router'

import Todos from './Todos/Todos'
import AddTodo from './AddTodo/AddTodo'

class App extends React.Component {
    state = {
        todos:[
            {id:1,title: "Todoz 1"},
            {id:2,title: "Todoz 2"},
            {id:3,title: "Todoz 3"}
        ]
    }
    deleteTodo = (e,id) => {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    }
    render(){
        if (this.state.todos.length === 0){
            return <h1>no tasks</h1>
        }
        return (
            <div>
                <h1>List of todo</h1>

                <Switch>
                    <Route exact path='/add' component={AddTodo}/>
                    <Route
                        exact
                        path="/"
                        render={()=> {
                            return (<Todos todos={this.state.todos}/>)
                        }
                        }
                    />
                </Switch>



            </div>
        )
    }
}

export default App



