import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '../Profile/Avatar';
import ShareBlock from './ShareBlock';
import connectDB from '../../services/connectDB'

class Post extends React.Component{
    constructor (post){
        super(post);
        connectDB = new connectDB();
        //this.state = {date: new Date()};
        this.state = {
            authorName: null,
            authoPhotoUrl: null,
            time: null,
            authorNickname: null,
            postContent: null,
            hashtags: null,
            locationName: null,
            photoURL: null,
            hashtags: null,
            btcLikeCount: null,
            commentCount: null,
            repostCount: null,
            liked: null,
            commented: null,
            reposted: null
        }
    }

    updatePost(){
        
    }
    /*
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000);
        }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
          });
    }
    */

    render (props) {
        let hashes = String(this.props.hashtags).split(' ');
        let hashList=[];
        
        if (hashes != null) {
            hashes.forEach((hash) => {
                hashList.push(<a className="link">#{hash} </a>) 
            })

        }
        
        let photo;
        if (this.props.photourl){
            photo = <div className="post_photo_solo"><img src={this.props.photourl}></img></div>
        }

        return (
            <div >
                <div className="post-container">
                    <div className="post-auth-desc">
                        <div className="author-photo"><Avatar width="32" height="32" imgurl={this.props.author_photo_url}/></div>
                        <div className="author-info">
                            <span className="author-name"><a href={this.props.url}>{this.props.author_name} <i className="author-nickname">{this.props.author_nickname}</i></a></span>
                            <span className="location"><a className="link-xs" href={this.props.location_link}>{this.props.location_name}</a></span> 
                            <span className="post-date">{this.state.date}</span>
                        </div>
                    </div>

                    <div className="post-content" >
                        <p className="Post_text">
                            {this.props.postcontent}
                            <a className="link">{hashList} </a>
                            {photo}
                        </p>
                        <ShareBlock btcLikeCount={this.props.btcLikeCount} liked={this.props.liked} commented={this.props.commented} reposted={this.props.reposted} commentCount={this.props.commentCount} repostCount={this.props.repostCount}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Post