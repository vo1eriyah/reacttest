import React from 'react'
import Avatar from '../Profile/Avatar';
import connectDB from '../../services/connectDB'

const connection = new connectDB();

export default class Comment extends React.Component {
    constructor (Comment){
        super(Comment)
        this.state = {
            id: null,
            authorName: null,
            authoPhotoUrl: null,
            time: null,
            authorNickname: null,
            comments: [],
            isLoaded: false,
        }
    }


    render(props) {
        return (
            <React.Fragment>
                <div className="post-auth-desc">
                    <div className="author-photo"><Avatar width="32" height="32" imgurl={this.props.author_photo_url} /></div>
                    <div className="author-info">
                        <span className="author-name"><a href={this.props.url}>{this.props.author_name} <i className="author-nickname">{this.props.author_nickname}</i></a></span>
                        <span className="location"><a className="link-xs" href={this.props.location_link}>{this.props.location_name}</a></span>
                        <span className="post-date">{this.props.time}</span>
                    </div>
                    <div></div>
                </div>
            </React.Fragment>
        )
    }
}