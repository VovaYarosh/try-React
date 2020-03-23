import React from 'react'

import "./Todo.css"

class  Todo extends React.Component{

    render(){
        const {title,deleteTodo} = this.props
        return(
            <div className="todo mb-2">
                <p>{title}</p>
                <button
                  onClick={()=> deleteTodo(this.props.id)}
                  className='btn btn-danger'
                >
                Delete
                </button>
            </div>
        )
    }
}

export default Todo