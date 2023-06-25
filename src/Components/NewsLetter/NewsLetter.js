import React from 'react';
import { Icons } from '../Icons/Icons';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';

export const NewsLetter = () => {
    return (
        <div className="cover-container text-light text-center p-5">
            <div>
                <p>NewsLetter</p>
            </div>
            <div>
                <h3>Sign up for the latest updates and offers</h3>
            </div>
            <div>
                <Form>
                    <Row className="gap-1">
                        <Col lg="8" md="7" xs="12">
                            <Form.Control placeholder="johnDoe@email.com" />
                        </Col>
                        <Col lg="4" md="5" xs="12">
                            <div className="d-grid">
                                <Button variant="warning">Subscribe</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div>
                Will you follow our thing
                <Icons />
            </div>
        </div>
    );
};
