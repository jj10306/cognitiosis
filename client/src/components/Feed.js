import React from "react";

import ReactDOM from 'react-dom';
import SplitText from 'react-pose-text';

import Post from "./Post"

const Feed = ({ posts, user }) => {
    const charPoses = {
        exit: { y: 100, opacity: 0 },
        enter: {
            y: 1,
            opacity: 1,
            transition: ({ charInWordIndex }) => ({
                type: 'spring',
                delay: charInWordIndex * 50,
                stiffness: 500 + charInWordIndex * 150,
                damping: 10 - charInWordIndex * 1
            })
        }
    };

    return (
        <div className="feed-container">
            <div className="animated-text-container">
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    {`Hello there ${user.name} ...`}
                </SplitText>
            </div>
            {posts.map((post, ind) => {
                return <Post key={ind} {...post} user={user} />
            })}
        </div>
    );
}
export default Feed;