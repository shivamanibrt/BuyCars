import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLocationArrow } from 'react-icons/fa'
import { BiMobile } from 'react-icons/bi'
import { AiTwotoneMail } from 'react-icons/ai'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='p-5 mt-2 footer'>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <h5>About</h5>
                        <p className='text-secondary'>Welcome to our Car dealership! Browse through our collection of luxury sport, sedan, and hatchback cars and find the perfect model to fulfill your dreams of speed and elegance.
                        </p>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5>Contact</h5>
                        <p className='text-secondary'><FaLocationArrow />{" "} Sydney, Nsw </p>
                        <p className='text-secondary'><BiMobile />{" "} Phone: +6123456789 </p>
                        <p className='text-secondary'><AiTwotoneMail />{" "} Email : johnDoe@email.com </p>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5>Categories</h5>
                        <ul className="list-unstyled ">
                            <li><Link to='/hatchback' className="text-decoration-none text-secondary">Hatchback</Link></li>
                            <li><Link to='/suv' className="text-decoration-none text-secondary">SUV</Link></li>
                            <li><Link to='/sportsCar' className="text-decoration-none text-secondary">Sports Car</Link></li>
                            <li><Link to='/sedan' className="text-decoration-none text-secondary">Sedan</Link></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5>Pages</h5>
                        <ul className="list-unstyled ">
                            <li><Link to='/' className="text-decoration-none text-secondary">Home</Link></li>
                            <li><Link to='/about' className="text-decoration-none text-secondary">About</Link></li>
                            <li><Link to='/catgories' className="text-decoration-none text-secondary">Catagories</Link></li>
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

export default Footer;
