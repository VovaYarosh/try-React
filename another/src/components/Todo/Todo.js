import React from 'react'

import "./Todo.css"

class  Todo extends React.Component{

    render(){
        const {title} = this.props
        return(
            <div className="todo">
                <p>{title}</p>
                <button
                  onClick={(e)=> this.props.deleteTodo(e,this.props.id)}
                >
                Delete
                </button>
            </div>
        )
    }
}

export default Todo