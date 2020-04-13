import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class NotFound extends Component{
    render(){
        return (
            <div className='text-center'>
                <h1>Page not found</h1>
                <p><Link to='/'>back to the main page</Link></p>
            </div>
        )
    }
}

export default NotFound