import React from 'react'
import Avatar from '../Profile/Avatar';
import ShareBlock from './ShareBlock';
import connectDB from '../../services/connectDB'
import Comment from '../Comment/Comment';
import Post from './Post';

const connection = new connectDB();


export default class PostSingle extends React.Component{
    constructor (PostSingle) {
        super(PostSingle)
        this.state = {
            postID: this.props.postID,
            comments: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        connection.getPost(this.state.postID)
        .then(json => {
            this.setState({
                comments: json,
                isLoaded: true
            })
        })
        /*connection.getPostComment(this.state.postID)
            .then(json => {
                this.setState({
                    comments: json,
                    isLoaded: true
                })
            })*/
    }

    render (props) {
        let {isLoaded, comments} = this.state;
        let listItems = comments.map ((comment, key) => 
                <Comment
                    commentID={comment.commentID}
                    commentText={comment.commentText}
                    commentAuthor={comment.commentAuthor}
                    commentNickname={comment.commentNickname}
                />
        )
        return (
            <React.Fragment>
                <Post/>
                {listItems}
            </React.Fragment>
        );
    }

}
