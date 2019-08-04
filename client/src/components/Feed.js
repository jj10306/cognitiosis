import React from "react";

import Post from "./Post"

const Feed = ({ posts }) => {
    return (
        <div className="feed-container">
            {posts.map((post, ind) => {
                return <Post key={ind} {...post} />
            })}
        </div>
    );
}
export default Feed;