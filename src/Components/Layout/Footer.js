import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLocationArrow } from 'react-icons/fa'
import { BiMobile } from 'react-icons/bi'
import { AiTwotoneMail } from 'react-icons/ai'

export const Footer = () => {
    return (
        <div className='p-5'>
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
                        <ul className="list-unstyled text-secondary">
                            <li>Hatchback</li>
                            <li>SUV</li>
                            <li>Sports Car</li>
                            <li>Sedan</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5>Pages</h5>
                        <ul className="list-unstyled text-secondary">
                            <li>Home</li>
                            <li>About</li>
                            <li>Categories</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
