import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


import PostModal from "../components/PostModal";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import Post from "../components/Post";



const LandingPage = withRouter ((props) => {

    let [isTeaching, setIsTeaching] = useState(false);
    let { activeJWT } = props;

    useEffect(() => {
        let isJwtPresent = activeJWT ? null : props.history.push("/");
    })
    return (
        <div className="landing-page-container">
            <NavBar setIsTeaching={setIsTeaching} />
            {
                props.isLoading
                    ?
                    <div className="loading-spinner">
                        <Loader
                            type="Puff"
                            color="#28A745"
                            height="500"
                            width="500"
                        />
                    </div>
                    : <>
                        <Feed posts={props.allPosts} />
                        <PostModal isTeaching={isTeaching} setIsTeaching={setIsTeaching} />
                    </>

            }
        </div>
    );




})
const mapStateToProps = state => {
    return {
        activeJWT: state.activeJWT,
        allPosts: state.allPosts,
        isLoading: state.isLoading,
    }
}


export default connect(mapStateToProps)(LandingPage);

