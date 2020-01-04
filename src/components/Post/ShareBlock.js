import React from 'react'
import './post.scss';
import BTClikeIcon from './icons/BTCLikeIcon'
import CommentIcon from './icons/CommentIcon'
import RepostIcon from './icons/RepostIcon'

class ShareBlock extends React.Component {
    constructor(ShareBlock){
        super(ShareBlock)
        this.state = {
            liked: this.props.liked,
            commented: this.props.commented,
            reposted: this.props.reposted
        }
    }

    render(props){
        let listitem =[];

        (this.state.liked == 1) ? listitem.push(<div className="like"><span className="icon liked"><BTClikeIcon /></span><span className="count liked">{this.props.btcLikeCount}</span></div>) 
        : listitem.push(<div className="like"><span className="icon"><BTClikeIcon/></span><span className="count">{this.props.btcLikeCount}</span></div>);
        
        (this.state.commented == 1) ? listitem.push(<div className="like"><span className="icon liked"><CommentIcon/></span><span className="count liked">{this.props.commentCount}</span></div>)
        : listitem.push(<div className="like"><span id="comment-icon" className="icon"><CommentIcon/></span><span className="count">{this.props.commentCount}</span></div>);

        (this.state.reposted == 1) ? listitem.push(<div className="like"><span className="icon liked"><RepostIcon/></span><span className="count liked">{this.props.repostCount}</span></div>)
        : listitem.push(<div className="like"><span className="icon"><RepostIcon/></span><span className="count">{this.props.repostCount}</span></div>)
        
        

        return(
            <React.Fragment>
                <div className="divider"><hr/></div>
                <div className="ShareBlock">
                    {listitem}
                </div>
            </React.Fragment>
        );
    }
}

export default ShareBlock