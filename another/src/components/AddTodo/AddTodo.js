import React from 'react'
import  "./AddTodo.css"

export class AddTodo extends React.Component{
    state = {
        title: '',
        date: ''
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) =>{
        e.preventDefault()
        alert(this.state.title + " " + this.state.date)
    }
    render(){
        return(
            <form id='add-todo' onSubmit={this.onSubmit}>
                <input
                    type='text'
                    value={this.state.title}
                    name='title'
                    onChange={this.onChange}
                />
                <input
                    type='text'
                    value={this.state.date}
                    name='date'
                    onChange={this.onChange}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default AddTodo