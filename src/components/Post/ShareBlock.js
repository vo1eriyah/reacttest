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
            reposted: this.props.reposted,
            btcLikeCount: this.props.btcLikeCount,
            commentCount: this.props.commentCount
        }

        //this.btcLikeClick = this.btcLikeClick.bind(this);
        this.btcLikeClick = () => {
            if (this.state.liked == 0)
            {
                this.setState(state => ({
                    btcLikeCount: ++state.btcLikeCount,
                    liked: state.liked = 1
            }));

            console.log('LIKED ;)' + this.state.btcLikeCount);
        }
        else {
            this.setState(state => ({
                btcLikeCount: --state.btcLikeCount,
                liked: state.liked = 0
            }));
            console.log('You have already DISLIKED ;)');
            }
        }

    }

    /*btcLikeClick() {
        if (this.state.liked == 1)
            {
                this.setState(state => ({
                btcLikeCount: ++state.btcLikeCount,
                //commentCount: ++state.commentCount
            }));

            console.log('Like ACCEPTED;)' + this.state.commentCount + ' '+ this.state.btcLikeCount);
        }
        else
            console.log('You have already liked ;)');
      }*/

    render(props){

        const {btcLikeCount, commentCount, repostCount} = this.state;

        let listitem =[];

        (this.state.liked == 1) ? listitem.push(<div className="like" onClick={() => this.btcLikeClick()}><span className="icon liked" ><BTClikeIcon /></span><span className="count liked">{btcLikeCount}</span></div>) 
        : listitem.push(<div className="like" onClick={() => this.btcLikeClick()}><span className="icon"><BTClikeIcon/></span><span className="count">{btcLikeCount}</span></div>);
        
        (this.state.commented == 1) ? listitem.push(<div className="like" onClick={this.handleClick}><span className="icon liked"><CommentIcon/></span><span className="count liked">{this.props.commentCount}</span></div>)
        : listitem.push(<div className="like"><span id="comment-icon" className="icon"><CommentIcon/></span><span className="count">{this.props.commentCount}</span></div>);

        (this.state.reposted == 1) ? listitem.push(<div className="like" onClick={this.handleClick}><span className="icon liked"><RepostIcon/></span><span className="count liked">{this.props.repostCount}</span></div>)
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