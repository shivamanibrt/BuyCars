import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import aboutImFirst from '../../Assets/About/claudio-schwarz-Zv8GOTkNEXM-unsplash.jpg'
import aboutImgSecond from '../../Assets/About/lance-asper-N9Pf2J656aQ-unsplash.jpg'
import aboutImgThird from '../../Assets/About/tyler-clemmensen-5q1xp_kresk-unsplash.jpg'

export const About = () => {

    return (
        <div>
            <div div className='about-section'>
            </div >
            <div className='text-secondary'>
                <Container className='mt-3 mb-3'>
                    <div className='p-3 shadow-lg'>
                        <h2 className='text-center mb-4'>Our Mission</h2>
                        <Row className="align-items-center">
                            <Col xs={12} md={6} lg={4}>
                                <img src={aboutImFirst} className="d-block w-100" alt='booksImage' style={{ width: '200px' }} />
                            </Col>
                            <Col xs={12} md={6} lg={8} className='d-flex align-items-center mt-3'>
                                <p className='fs-5 lh-lg'>Unlocking the exhilarating power of cars, we empower drivers and ignite a passion for speed and performance. Join us on an adventurous journey of automotive knowledge, growth, and shared experiences.</p>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <Container className='mt-3 mb-3'>
                    <div className='p-3 shadow-lg'>
                        <h2 className='text-center mb-4'>Our Vision</h2>
                        <Row className="align-items-center">
                            <Col xs={12} md={6} lg={8} className='d-flex align-items-center mt-3'>
                                <p className='fs-5 lh-lg'>Unleashing the future of mobility, we envision a world where cutting-edge automotive technology meets sustainable transportation. Join us in shaping a future that combines innovation, efficiency, and unparalleled driving experiences.</p>
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                                <img src={aboutImgSecond} className="d-block w-100" alt='booksImage' style={{ width: '200px' }} />
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container className='mt-3 mb-3'>
                    <div className='p-3 shadow-lg'>
                        <h2 className='text-center mb-4'>Join Us</h2>
                        <Row className="align-items-center">
                            <Col xs={12} md={6} lg={4}>
                                <img src={aboutImgThird} className="d-block w-100" alt='booksImage' style={{ width: '200px' }} />
                            </Col>
                            <Col xs={12} md={6} lg={8} className='d-flex align-items-center mt-3'>
                                <p className='fs-5 lh-lg'>Become a part of our thrilling community and embark on a journey of exploration, learning, and growth. Join us at BuyCars and unlock a world of automotive knowledge, inspiration, and connections. Together, let's create a shared space where engines roar and ideas accelerate.
                                    <div className="text-center mt-3">
                                        <Button variant="outline-primary"
                                            className="col-4">Join Us</Button>
                                    </div>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>


    )
}