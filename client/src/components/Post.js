import React, { useState } from "react";

import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const PostInteraction = ({ likes, dislikes, user, postId }) => {
    let [likeCount, setLikeCount] = useState(likes.length)
    let [dislikeCount, setDislikeCount] = useState(dislikes.length)

    const handleClick = (action) => {
        // action === "like"
        //     ?
        //     : null
    }

    return (
        <div className="interaction-container">
            <div className="likes-container">
                <FaThumbsUp onClick={() => handleClick("like")}  />
                <p>{likeCount}</p>
            </div>

            <div className="dislikes-container">
                <FaThumbsDown onClick={() => handleClick("dislike")} />
                <p>{dislikeCount}</p>
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
                {title}
            </div>
            <div className="right-container">
                <p><strong> {username}</strong> </p>
                <p> <strong> {prettyDate} </strong> </p>
            </div>
        </div>
    );
}
const Post = ({ id, username, author, title, content, likes, dislikes, date, user }) => {
    const img_arr = ["albert.jpeg", "newton.jpeg", "hooke.jpeg", "tesla.jpeg", "franklin.jpeg", "plato.jpeg"];
    let rand = img_arr[Math.floor(Math.random() * img_arr.length)];
    let img_path = `./${rand}`;

    return (
        <div className="post-container">
            <div className="image-container">
                <img src={img_path} alt=""/>
            </div>

            <div className="post-content-container">
                <PostMetaData title={title} username={username} date={date} />
                <div className="content-container">
                    {content}
                </div>
                <PostInteraction postId={id} likes={likes} dislikes={dislikes} user={user} />

            </div>
        </div>
    );
}

export default Post;