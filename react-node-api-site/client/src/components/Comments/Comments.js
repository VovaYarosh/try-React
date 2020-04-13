import React,{ Component } from 'react'

import Comment from '../Comment/Comment'

export class Comments extends Component{
    render(){
        const {comments} = this.props
        if(comments.length === 0){
            return <p>no comments</p>
        }
        return(
            <div>
                {
                    this.props.comments.map(comment =>(
                        <Comment key={comment._id} comment={comment}/>
                    ))
                }
            </div>
        )
    }
}

export default Comments