import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const LoginForm = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/auth", {
            username, password
        }).then(res => console.log(res.data))
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
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Col>
                </Row>

            </Form>
        </div>
    );
}

export default LoginForm;