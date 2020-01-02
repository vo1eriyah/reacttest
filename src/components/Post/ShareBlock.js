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
            <div>
            <div className="divider"><hr/></div>
            <div className="ShareBlock">
                
                <div className="Bitlike like"><span className="icon"><img src={BTClikeIcn}/></span><span className="count active">0.28826</span></div>
                <div className="CommentsCount like"><span className="icon"><img src={CommentIcn}/></span><span className="count">22</span></div>
                <div className="RepostCount like"><span className="icon"><img src={RepostCountIcn}/></span><span className="count active">12</span></div>
            </div>
            </div>
        );
    }
}

export default ShareBlock