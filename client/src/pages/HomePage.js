import React from "react";
import Particles from "react-particles-js";
import { withRouter } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import SplitText from 'react-pose-text';
import posed from 'react-pose';

import LoginForm from '../components/LoginForm'
import { particles } from '../utils/constants/particles';


const HomePage = () => {
    const charPoses = {
        exit: { opacity: 0, y: 20 },
        enter: {
            opacity: 1,
            y: 0,
            delay: ({ charIndex }) => charIndex * 30
        }
    };

    return (
        <div className={"home-page-container"}>
            <HomePane className="left-pane">
                <Particles className={"particles-js"} canvasClassName={"particles-canvas"} params={particles} height={"100%"} width={"100%"} />
                <div className="intro-container">
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    Welcome to Cognitionis
                    </SplitText>
                    <div className="logo-container">
                        <img src="./brain.svg" alt="brain image" />
                    </div>
                </div>
            </HomePane>
            <HomePane className="right-pane">
                <LoginForm/>
                <Welcome/>
            </HomePane>
            {/*<Footer />*/}
        </div>
    );
}
const HomePane = (props) => {
    return (
        <div className={props.className}> {props.children} </div>
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
    // const Button = posed.button({
    //     hoverable: true,
    //     init: {
    //         scale: 1,
    //         boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    //     },
    //     hover: {
    //         scale: 1.2,
    //         boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    //     }
    // });
    return (
        <div className="welcome-container">
            <h1>Gain, Share and Endulge in Knowledge.</h1>
            <div className="button-container">
                {/*<Button></Button>*/}
                <Button variant="success" onClick={handleClick}>Sign Up</Button>
                <Button className={"log-in"} variant="outline-success" onClick={handleClick} >Log In</Button>
            </div>
        </div>
    );
});

export default HomePage;