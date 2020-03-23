import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component{
    render(){
        return(
            <ul className='nav'>
                <li className='nav-item'>
                    <Link className="nav-link" to="/">tasks</Link>
                </li>
                <li className='nav-item'>
                <Link className="nav-link" to="/add">add todo</Link>
                </li>
            </ul>
        )
    }
}

export default Navbar