import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLocationArrow } from 'react-icons/fa'
import { BiMobile } from 'react-icons/bi'
import { AiTwotoneMail } from 'react-icons/ai'
import { Link } from 'react-router-dom';

export const Footer = () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <div className='p-5 mt-2'>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <h5>About</h5>
                        <p className='li-footer'>Welcome to our Car dealership! Browse through our collection of luxury sport, sedan, and hatchback cars and find the perfect model to fulfill your dreams of speed and elegance.
                        </p>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5>Contact</h5>
                        <p className='li-footer'><FaLocationArrow />{" "} Sydney, Nsw </p>
                        <p className='li-footer'><BiMobile />{" "} Phone: +6123456789 </p>
                        <p className='li-footer'><AiTwotoneMail />{" "} Email : johnDoe@email.com </p>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5>Categories</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to='/hatchback' className="text-decoration-none li-footer" onClick={scrollToTop}>Hatchback</Link>
                            </li>
                            <li>
                                <Link to='/suv' className="text-decoration-none  li-footer" onClick={scrollToTop}>SUV</Link>
                            </li>
                            <li>
                                <Link to='/sportsCar' className="text-decoration-none li-footer" onClick={scrollToTop}>Sports Car</Link>
                            </li>
                            <li>
                                <Link to='/sedan' className="text-decoration-none  li-footer" onClick={scrollToTop}>Sedan</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5>Pages</h5>
                        <ul className="list-unstyled ">
                            <li>
                                <Link to='/' className="text-decoration-none li-footer" onClick={scrollToTop}>Home</Link></li>
                            <li>
                                <Link to='/about' className="text-decoration-none li-footer" onClick={scrollToTop}>About</Link>
                            </li>
                            <li>
                                <Link to='/catgories' className="text-decoration-none li-footer" onClick={scrollToTop}>Catagories</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className='text-center mt-3'>
                Created by &copy; {""}
                <a href='https://shivamanibartaula.com' target='_blank' rel='noopener noreferrer'>Shivamani Bartaula</a> 2023 . All rights reserved.
            </div>
        </div>
    );
};


