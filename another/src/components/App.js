import React from 'react'
import {Switch, Route} from 'react-router'
import axios from 'axios'

import Todos from './Todos/Todos'
import AddTodo from './AddTodo/AddTodo'
import Navbar from './Navbar/Navbar'

class App extends React.Component {

    render(){
        return (
            <div className='container'>
                <Navbar/>
                <Switch>
                    <Route
                        exact
                        path='/add'
                        render={() => <AddTodo addTodo={this.addTodo}/>}
                    />
                    <Route
                        exact
                        path="/"
                        render={()=> {
                            return (<Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>)
                        }
                        }
                    />
                </Switch>
            </div>
        )
    }
}

export default App



