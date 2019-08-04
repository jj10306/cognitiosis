import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { newPost } from "../ducks/action_creators/post_action_creator"
import Form from 'react-bootstrap/Form';
import axios from "axios";

const TeachingForm = props => {
    const TITLE_PLACEHOLDER = "{ ... knowledge }";
    const CONTENT_PLACEHOLDER = "Did you know that import { sumn } is not some exclusive importing syntax, instead it is just a use of ES6 destructuring";

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (props.isTeachingPosted) {
            handleSubmit();
        }
    });

    const handleSubmit = () => {
        props.setIsTeachingPosted(false);
        props.newPost({ title, content, user: props.activeUser });
        props.setIsTeaching(false);

    };

    const handleChange = (event, stateSetter) => {
        stateSetter(event.target.value);
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control size="lg" type="text" placeholder={TITLE_PLACEHOLDER} onChange={e => handleChange(e, setTitle)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder={CONTENT_PLACEHOLDER} onChange={e => handleChange(e, setContent)} />
            </Form.Group>
        </Form>
    );
}

const mapStateToProps = state => {
    return { activeUser: state.activeUser }
}
const mapDispatchToProps = { newPost };

export default connect(mapStateToProps, mapDispatchToProps)(TeachingForm);