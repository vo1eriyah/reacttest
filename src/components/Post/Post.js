import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '../Profile/Avatar';


class Post extends React.Component{
    constructor (post){
        super(post)
    }

    render (props) {
        return (
            <div >
                <Grid className="post-container">
                    <Row className="post_auth_desc">
                        <Col className="author_photo"><Avatar width="32" height="32"/></Col>
                        <Col className="author_info">
                            <Row lg={12}><span className="author_name">{this.props.author_name} <i className="author_nickname">{this.props.author_nickname}</i></span></Row>
                            <Row lg={12}>
                                <Col className="location"><a className="link" href="#">Jl. Pantai Kuta</a></Col>                     
                                <Col className="post_date">12.12.2019</Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="post_content" >
                        <Col lg={12} xs={12}>
                        <p>
                        The Venom symbiote requires a perfect match to bond with its host; otherwise, the host is doomed. The Venom movie plays like a midnight horror that has invaded a superhero movie, and while there are some laffs to be had, it's far from a perfect match. 
                        <a className="link">#venommovie</a>

                        <div className="post_photo_solo"><img src="https://st.kp.yandex.net/im/kadr/3/2/6/kinopoisk.ru-Venom-3260983.jpg"></img></div>
                        </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default Post