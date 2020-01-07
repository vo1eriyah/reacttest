import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '../Profile/Avatar';
import ShareBlock from './ShareBlock';
import connectDB from '../../services/connectDB';


const connection = new connectDB();

export default class Postcopy extends React.Component{
    constructor (post){
        
        super(post);
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
            reposted: null,
            posts: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        connection.getAllPosts()
            .then(json => {
                this.setState({
                    posts: json,
                    isLoaded: true
                })
            })
    }

    getHashArray(){
        let {isLoaded, posts} = this.state;
        let hashes = [];
        let hashList=[];
        posts.map((item, key) => (
            <div key="{key}">
                {hashList = String(item.hashtags).split(' ')}
                {hashList.forEach((hash) => {
                    //return <a className="link">#{hash} </a>
                    return hashes.push(<a className="link">#{hash} </a>)
                })}
                { /*console.log(hashes)*/}
            </div>
        ))

        }
    getPhoto(id){
        let {isLoaded, posts} = this.state;
        let photo;
        //id = posts.map(item => item.id)

        /*posts.forEach((item, id) => {
            return <div className="post_photo_solo"><img src={item.photoURL}/></div>
        }
        )*/
        /*posts.map((item,id) => (
            photo = <div className="post_photo_solo"><img src={item.photoURL}/></div>
        )
        )
        return photo*/
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
        let {isLoaded, posts} = this.state;
        
        
        
        /*let photo;
        if (this.state.item.photoURL){
            photo = <div className="post_photo_solo"><img src={this.state.item.photourl}></img></div>
        }*/

        if (!isLoaded){
            return(
                <>
                loading
                </>
            )
        }
        else {
        return (
            <div >
                {posts.map((item, key) => (
                    <div key="{key}">
                        <div className="post-container">
                    <div className="post-auth-desc">
                        <div className="author-photo"><Avatar width="32" height="32" imgurl={item.authoPhotoUrl}/></div>
                        <div className="author-info">
                            <span className="author-name"><a href={item.authorUrl}>{item.authorName} <i className="author-nickname">{item.authorNickname}</i></a></span>
                            <span className="location"><a className="link-xs" href={item.locationLink}>{item.locationName}</a></span> 
                            <span className="post-date">{item.date}</span>
                        </div>
                    </div>

                    <div className="post-content" >
                        <p className="Post_text">
                            {item.postContent}
                            <a className="link">{this.getHashArray()} </a>

                            {/*<div className="post_photo_solo"><img src={item.photoURL}/></div>*/}
                            {/*{photo}*/}
                            {this.getPhoto(item.id)}
                        </p>
                        <ShareBlock btcLikeCount={item.btcLikeCount} liked={item.liked} commented={item.commented} reposted={item.reposted} commentCount={item.commentCount} repostCount={item.repostCount}/>
                    </div>
                </div>
                    </div>
                ))
                }
            </div>
        );
    }
}

}
