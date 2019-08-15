import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { withRouter } from 'react-router-dom';

import { connect } from "react-redux"

import { LOCAL_API_HOST } from "../utils/constants/api_config"
import { login } from "../ducks/action_creators/login_action_creator";

const LoginForm = withRouter((props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${LOCAL_API_HOST}/auth`, {
            username, password
        }).then(res => {
            let { token, user } = res.data;
            props.login(token, user, props.history.push);
            props.history.push("landing");
        }).catch(err => {
            console.log("An error occured when trying to login" + err);
        });
    };
    const handleChange = (event, stateSetter) => {
        stateSetter(event.target.value);
    }

    return (
        <div className="login-form-container">
            <Form onSubmit={handleSubmit} >
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="Username" onChange={(event) => handleChange(event, setUsername)} />
                    </Col>
                    <Col>
                        <Form.Control type={"password"} placeholder="Password" onChange={(event) => handleChange(event, setPassword)} />
                    </Col>
                    <Col>
                        <Button variant="success" type="submit">
                            Login
                        </Button>
                    </Col>
                </Row>

            </Form>
        </div>
    );
})

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(LoginForm);