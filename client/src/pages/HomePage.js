import React from "react";
import Particles from "react-particles-js";
import { withRouter } from 'react-router-dom';

import Button from "react-bootstrap/Button";

import { particles } from '../utils/constants';


const HomePage = () => {
    return (
        <div className={"home-page-container"}>
            <HomePane className="left-pane"
                      content={<Particles params={particles}/>}
            />
            <HomePane className="right-pane" content={<Welcome/>} />
            <Footer />
        </div>
    );
}
const HomePane = (props) => {
    return (
        <div className={props.className}> {props.content} </div>
    );
}
const Footer = () => {
    return (
        <div className={"footer"}> footer </div>
    )
}
const Welcome = withRouter((props) => {
    const handleClick = () =>  {
        props.history.push('/register');
    }

    return (
        <div className="welcome-container">
            <h1>Gain, Share and Endulge in Knowledge.</h1>
            <div className="button-container">
                <Button variant="success" onClick={handleClick}>Sign Up</Button>
                <Button className={"log-in"} variant="outline-success" onClick={handleClick} >Log In</Button>
            </div>
        </div>
    );
});

export default HomePage;