import React from 'react'

import Todo from '../Todo/Todo'

export class Todos extends React.Component{

   render(){
       return (
           <div>
               {this.props.todos.map(todo=> {
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

export default Todos

