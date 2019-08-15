import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { LOCAL_API_HOST } from "../utils/constants/api_config"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegisterForm = withRouter ((props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        console.log("in handle submit")
        event.preventDefault();
        axios.post(LOCAL_API_HOST, {
            name, email, username, password
        }).then(res => props.history.push("/"))
    };
    const handleChange = (event, stateSetter) => {
        stateSetter(event.target.value);
    }

    return (
        <div className="register-container">
            <div className="form-container">
                <Form className={"register-form"} onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name={"name"} type="text" onChange={(event) => handleChange(event, setName)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name={"email"} type="email" onChange={(event) => handleChange(event, setEmail)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name={"username"} type="text" onChange={(event) => handleChange(event, setUsername)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name={"password"} type="password" onChange={(event) => handleChange(event, setPassword)} />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        </div>

    );
})
export default RegisterForm;