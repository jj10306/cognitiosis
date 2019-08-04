import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TeachingForm from "./TeachingForm";

const PostModal = props => {
    let { isTeaching, setIsTeaching } = props;

    let  [isTeachingPosted, setIsTeachingPosted] = useState(false);

    const handleClose = () => setIsTeaching(false);


    // const handlePost =

    return (
        <Modal show={isTeaching} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title> New Teaching </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TeachingForm isTeachingPosted={isTeachingPosted} setIsTeaching={setIsTeaching} setIsTeachingPosted={setIsTeachingPosted} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => setIsTeachingPosted(true)}>
                    Post!
                </Button>
            </Modal.Footer>
        </Modal>
    );

}

export default PostModal;