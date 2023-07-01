import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import aboutImFirst from '../../Assets/About/claudio-schwarz-Zv8GOTkNEXM-unsplash.jpg'
import aboutImgSecond from '../../Assets/About/lance-asper-N9Pf2J656aQ-unsplash.jpg'
import aboutImgThird from '../../Assets/About/tyler-clemmensen-5q1xp_kresk-unsplash.jpg'
import { useNavigate } from 'react-router-dom'

export const About = () => {
    const navigate = useNavigate();
    const handelOnClick = () => {
        navigate('/login')
    }

    return (
        <div>
            <div div className='about-section main'>
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
                                        <Button variant="outline-dark"
                                            className="col-4" onClick={handelOnClick}>Join Us</Button>
                                    </div>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className='map-container'>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387210.2709891905!2d-122.41941550000001!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1568669284453!5m2!1sen!2sin'
                        width='100%' height='400px' style={{ border: '0' }} allowFullScreen='' title='Google Maps' />
                </div>
            </div>
        </div>


    )
}