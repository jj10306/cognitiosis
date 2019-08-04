import React from "react";

import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const PostInteraction = ({ likes, dislikes }) => {
    return (
        <div className="interaction-container">
            <div className="likes-container">
                <FaThumbsUp/>
                <p>{likes.length}</p>
            </div>

            <div className="dislikes-container">
                <FaThumbsDown/>
                <p>{dislikes.length}</p>
            </div>
        </div>
    );

}

const PostMetaData = ({ username, title, date }) => {
    date = new Date(date);
    let month = date.getUTCMonth() + 1; //months from 1-12
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();

    let prettyDate =  month + "/" + day + "/" + year ;

    return (
        <div className="post-meta-container">
            <div className="left-container">
                <p>{title}</p>
            </div>
            <div className="right-container">
                <p> by <strong> {username}, </strong> </p>
                <p> on <strong> {prettyDate} </strong> </p>
            </div>
        </div>
    );
}
const Post = ({ username, author, title, content, likes, dislikes, date }) => {
    return (
        <div className="post-container">
            <div className="image-container">
                <img src="./jakob_brian_johnson.png" alt=""/>
            </div>

            <div className="post-content-container">
                <PostMetaData title={title} username={username} date={date} />
                <div className="content-container">
                    <p>{content}</p>
                </div>
                <PostInteraction likes={likes} dislikes={dislikes} />

            </div>
        </div>
    );
}

export default Post;