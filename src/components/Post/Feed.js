import React from 'react'
import Post from './Post'
import connectDB from '../../services/connectDB'

const connection = new connectDB();

class Feed extends React.Component {
    constructor (Feed){
        super(Feed)
        this.state = {
            isLoaded: false,
            id: null,
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
        }
    }

    componentDidMount() {
        connection.getAllPosts()
            .then(json => {
                this.setState({
                    posts: json,
                    isLoaded: true
                })
            })
    }
    
    render (props){
        let {posts, isLoaded} = this.state;
        let listItems = posts.map((post, key) =>
            <div key="{key}">
                <Post
                    key={post.id}
                    author_photo_url={post.authoPhotoUrl}
                    author_name={post.authorName}
                    author_nickname={post.authorNickname}
                    postcontent={post.postContent}
                    photourl={post.photoURL}
                    hashtags={post.hashtags}
                    location_name={post.locationName}
                    btcLikeCount={post.btcLikeCount}
                    commentCount={post.commentCount}
                    repostCount={post.repostCount}
                    liked={post.liked}
                    commented={post.commented}
                    reposted={post.reposted}
                    time={post.time}
                />
                </div>
        )

        if (isLoaded) {
            return (
                <React.Fragment>
                    {listItems}
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    loading...
                </React.Fragment>
            )
        }
    }
}

export default Feed


