import React from 'react';
import { Icons } from '../../Icons/Icons';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

export const NewsLetter = () => {
    const handelOnClick = () => {
        try {
            // alert('You are subscribed ')
        } catch (error) {
            toast.error(error.message)

        }
    }
    return (
        <div className="cover-container text-light text-center p-5 mt-5">
            <div>
                <h5>NewsLetter</h5>
            </div>
            <div>
                <h4>Sign up for the latest updates and offers</h4>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center vh-50">
                <Form>
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="d-flex flex-wrap gap-1 justify-content-center">
                                <Form.Control placeholder="johnDoe@email.com" style={{ borderRadius: '0' }} />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="d-grid">
                                <Button variant="primary" style={{ borderRadius: '0' }} className="mobile-button" onClick={handelOnClick} >Subscribe</Button>
                            </div>
                        </div>
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
