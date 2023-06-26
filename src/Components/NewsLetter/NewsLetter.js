import React from 'react';
import { Icons } from '../Icons/Icons';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';

export const NewsLetter = () => {
    return (
        <div className="cover-container text-light text-center p-5">
            <div>
                <h5>NewsLetter</h5>
            </div>
            <div>
                <h4>Sign up for the latest updates and offers</h4>
            </div>
            <div>
                <Form>
                    <div className="d-flex flex-wrap gap-1 justify-content-center">
                        <Col sm={6} md={4} lg={3}>
                            <Form.Control placeholder="johnDoe@email.com" style={{ borderRadius: '0' }} />
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <Button variant="primary" style={{ borderRadius: '0' }}>Subscribe</Button>
                        </Col>
                    </div>
                </Form>

            </div >
            <div>
                <h5>Follow our Social media</h5>
                <Icons />
            </div>
        </div >
    );
};
