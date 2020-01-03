import React from 'react'
import BTClikeIcn from './BTClike.svg'
import CommentIcn from './comment.svg'
import RepostCountIcn from './repost.svg'

class ShareBlock extends React.Component {
    constructor(ShareBlock){
        super(ShareBlock)
    }

    render(props){
        return(
            <React.Fragment>
            <div className="divider"><hr/></div>
            <div className="ShareBlock">
                
                <div className="Bitlike like"><span className="icon"><img src={BTClikeIcn}/></span><span className="count active">{this.props.btcLikeCount}</span></div>
                <div className="CommentsCount like"><span className="icon"><img src={CommentIcn}/></span><span className="count">{this.props.commentCount}</span></div>
                <div className="RepostCount like"><span className="icon"><img src={RepostCountIcn}/></span><span className="count active">{this.props.repostCount}</span></div>
            </div>
            </React.Fragment>
        );
    }
}

export default ShareBlock