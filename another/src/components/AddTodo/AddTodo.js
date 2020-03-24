import React from 'react'
import {connect} from "react-redux"

import {addTodo} from '../../store/actions/todoActions'

import  "./AddTodo.css"

export class AddTodo extends React.Component{
    state = {
        title: '',
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault()
        this.props.addTodo({id: Date.now(),title: this.state.title})
        this.setState({title: ""})
    }
    render(){
        return(
            <form id='add-todo'  onSubmit={this.onSubmit}>
                <h1>Add a task</h1>
                <div className="form-group">
                    <label htmlFor="title">Name</label>
                    <input
                        className='form-control'
                        type='text'
                        value={this.state.title}
                        name='title'
                        onChange={this.onChange}
                    />
                </div>
                <button
                    className='btn btn-success'
                >
                    Add
                </button>
            </form>
        )
    }
}



export default connect(null,{addTodo})(AddTodo)