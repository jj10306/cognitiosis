import React from 'react';

import { users, posts, profile } from "../utils/constants/userData"
import {forEach} from "react-bootstrap/es/utils/ElementChildren";


const PostMetaData = (props) => {
    let { author, title, date } = props.data;
    return (
        <div className="post-meta-container">
            <h1>{author}</h1>
            <h2>{title}</h2>
            <h3>{date}</h3>
        </div>
    );
}
const Post = (props) => {
    debugger;
    return (
        <div className="post-container">
            <PostMetaData data={props.data} />
            <p>{props.data.content}</p>

        </div>
    );
}

const LandingPage = () => {
    return posts.map(post => {
                return <Post data={post} />;
            });


}
export default LandingPage;

