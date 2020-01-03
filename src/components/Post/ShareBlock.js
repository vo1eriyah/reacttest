import React from 'react'
import BTClikeIcn from './BTClike.svg'
import CommentIcn from './comment.svg'
import RepostCountIcn from './repost.svg'
import './post.scss';

class ShareBlock extends React.Component {
    constructor(ShareBlock){
        super(ShareBlock)
        this.state = {
            likeiconstate: this.props.liked,
            commenticonstate: this.props.commented,
            repostediconstate: this.props.reposted
        }
    }

    render(props){

        if (this.state.likeiconstate===true){
            document.getElementById('btc-icon').classList.add('liked')
        }

        return(
            <React.Fragment>
            <div className="divider"><hr/></div>
            <div className="ShareBlock">

                <div className="like"><span className="icon"><img id="btc-icon" src={BTClikeIcn}/></span><span className="count liked">{this.state.likeiconstate}{this.props.btcLikeCount}</span></div>
                <div className="like"><span className="icon"><img src={CommentIcn}/></span><span className="count">{this.props.commentCount}</span></div>
                <div className="like"><span className="icon"><img src={RepostCountIcn}/></span><span className="count">{this.props.repostCount}</span></div>
            </div>
            </React.Fragment>
        );
    }
}

export default ShareBlock