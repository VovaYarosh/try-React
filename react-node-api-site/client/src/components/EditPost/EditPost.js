import React, {Component} from 'react'
import {connect} from 'react-redux'

import Spinner from '../Spinner/Spinner'
import withAuth from '../../hocs/withAuth'

import {editPost, getPost} from "../../store/actions/postActions"

export class EditPost extends Component{
    constructor(props){
        super(props)

        this.titleInput = React.createRef();
        this.textInput = React.createRef()
    }

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.getPost(id)
    }

    onSubmit = e => {
        e.preventDefault();
        const id = this.props.match.params.id
        this.props.editPost(id,{
            title: this.titleInput.current.value,
            text: this.textInput.current.value
        },
        this.props.history
        );
    };

    render(){
        const {post} = this.props
        if(!post){
            return <Spinner/>
        }
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">header</label>
                    <input
                        ref={this.titleInput}
                        type="text"
                        defaultValue={post.title}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="text">content</label>
                    <input
                        ref={this.textInput}
                        type="text"
                        defaultValue={post.text}
                        className="form-control"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    edit
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
   post: state.postReducer.post
})

export default withAuth(connect(mapStateToProps,{editPost,getPost})(EditPost))