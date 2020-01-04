import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '../Profile/Avatar';
import ShareBlock from './ShareBlock';


class Post extends React.Component{
    constructor (post){
        super(post);
        this.state = {date: new Date()};
    }

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
    

    render (props) {
        return (
            <div >
                <div className="post-container">
                    <div className="post-auth-desc">
                        <div className="author-photo"><Avatar width="32" height="32" imgurl={this.props.author_photo_url}/></div>
                        <div className="author-info">
                            <span className="author-name"><a href={this.props.url}>{this.props.author_name} <i className="author-nickname">{this.props.author_nickname}</i></a></span>
                            <span className="location"><a className="link-xs" href={this.props.location_link}>{this.props.location_name}</a></span> 
                 
                            <span className="post-date">{this.state.date.toLocaleTimeString()}</span>
                        </div>
                    </div>

                    <div className="post-content" >
                        <p className="Post_text">
                            {this.props.postcontent}
                            <a className="link">#{this.props.hashtags}</a>
                            
                            <div className="post_photo_solo"><img src={this.props.photourl}></img></div>
                        </p>

                        <ShareBlock btcLikeCount={this.props.btcLikeCount} liked={this.props.liked} commented={this.props.commented} reposted={this.props.reposted} commentCount={this.props.commentCount} repostCount={this.props.repostCount}/>
                    </div>

                </div>
            </div>
        );
    }

}

export default Post