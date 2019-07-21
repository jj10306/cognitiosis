import React from 'react';

import Nav from 'react-bootstrap/Nav'
import { users, posts, profile } from "../utils/constants/userData"
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const PostInteraction = (props) => {
    return (
        <div className="interaction-container">
            <div className="likes-container">
                <FaThumbsUp/>
                <p>4</p>
            </div>

            <div className="dislikes-container">
                <FaThumbsDown/>
                <p>5</p>
            </div>
        </div>
    );

}

const PostMetaData = (props) => {
    let { username, title, date } = props.data;
    return (
        <div className="post-meta-container">
            <div className="left-container">
                <p>{title}</p>
            </div>
            <div className="right-container">
                <p> by <strong> {username}, </strong> </p>
                <p> on <strong> {date} </strong> </p>
            </div>
        </div>
    );
}
const Post = (props) => {
    return (
        <div className="post-container">
            <PostMetaData data={props.data} />
            <div className="content-container">
                <p>{props.data.content}</p>
            </div>
            <PostInteraction />

        </div>
    );
}
const Feed = (props) => {
    return (
        <div className="feed-container">
            {posts.map((post, ind) => {
                return <Post key={ind} data={post} />
            })}
        </div>
    );
}
const LandingPage = (props) => {
    return (

        <div className="landing-page-container">
            <Nav
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
            </Nav>
            <Feed/>
        </div>
    );


}
export default LandingPage;

