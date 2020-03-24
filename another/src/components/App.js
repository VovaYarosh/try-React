import React from 'react'
import {Switch, Route} from 'react-router'
import {connect} from 'react-redux'

import {getTodos} from "../store/actions/todoActions";

import Todos from './Todos/Todos'
import AddTodo from './AddTodo/AddTodo'
import Navbar from './Navbar/Navbar'

class App extends React.Component {
    componentDidMount(){
        this.props.getTodos();
    }

    render(){
        return (
            <div className='container'>
                <Navbar/>
                <Switch>
                    <Route
                        exact
                        path='/add'
                        render={() => <AddTodo/>}
                    />
                    <Route
                        exact
                        path="/"
                        render={()=> {
                            return (<Todos todos={this.props.todos}/>)
                        }
                        }
                    />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        todos:  state.todoReducer.todos
    }
}

export default connect(mapStateToProps,{getTodos})(App)




