import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'

import {addComment} from "../../store/actions/postActions"

export class AddComment extends Component{
    state = {
        text: ""
    }

    onChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e =>{
        e.preventDefault()
        const id = this.props.match.params.id;
        this.props.addComment(id, this.state)
        this.setState({text: ""})
    }

    render(){
        const {user} = this.props;
        const {text} = this.state;

        if(!user) {
            return <div>
                <p>
                    Login or register to leave comments
                </p>
                <p><Link to='/login'>Login</Link> or {" "} <Link to='/register'>Register</Link></p>
            </div>
        }

        return(
            <form className='mb-5' onSubmit={this.onSubmit}>
             <div className="form-group">
                 <label htmlFor="text">Comment</label>
                 <textarea
                     type='text'
                     value={text}
                     onChange={this.onChange}
                     name='text'
                     className="form-control"
                 />
             </div>
                <button type="submit" className='btn btn-primary'>send</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authReducer.user
})

export default withRouter(connect(mapStateToProps, {addComment})(AddComment))