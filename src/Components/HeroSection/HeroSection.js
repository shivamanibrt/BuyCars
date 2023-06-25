import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import HeroSectionImg from '../../Assets/Hero Section/top-car-view-png-34863.png';

export const HeroSection = () => {
    return (
        <div className="main">
            <div className='hero_section text-white'>
                <Container className="p-5 herosection_container">
                    <Row className="align-items-center justify-content-center">
                        <Col xs={12} lg={6} className="align-items-center mt-3">
                            <h1>Hola!</h1>
                            <p>
                                Welcome to our Car dealership! Browse through our collection of luxury sport, sedan, and hatchback cars
                                and find the perfect model to fulfill your dreams of speed and elegance.
                            </p>
                            <div className='d-flex gap-2'>
                                <Button variant="outline-light" style={{ borderRadius: '0' }}>
                                    READ MORE
                                </Button>
                                <Button variant="light" style={{ borderRadius: '0' }}>
                                    SHOP NOW
                                </Button>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="mt-3">
                            <Image src={HeroSectionImg} className="w-100" alt='Red Ferrari Top car png' />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};
