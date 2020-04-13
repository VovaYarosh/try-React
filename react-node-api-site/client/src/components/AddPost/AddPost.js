import React, {Component} from 'react'
import {connect} from 'react-redux'

import withAuth from '../../hocs/withAuth'
import {addPost} from "../../store/actions/postActions"

export class AddPost extends Component{
    state = {
        title: "",
        text: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addPost(this.state,this.props.history)

    }

    render(){
        const {title, text} = this.state
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">header</label>
                    <input
                        type="text"
                        value={title}
                        onChange={this.onChange}
                        name="title"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="text">content</label>
                    <input
                        type="text"
                        value={text}
                        onChange={this.onChange}
                        name="text"
                        className="form-control"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    share
                </button>
            </form>
        )
    }
}

export default withAuth(connect(null,{addPost})(AddPost))