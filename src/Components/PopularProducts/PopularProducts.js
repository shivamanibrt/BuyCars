import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CardComponent } from '../ReusableComponent/CardComponent';
import carImg1 from '../../Assets/PopularProducts/car-front-png-32726.png';
import carImg2 from '../../Assets/PopularProducts/car-png-16828 (1).png';
import carImg3 from '../../Assets/PopularProducts/car-png-39054.png';
import carImg4 from '../../Assets/PopularProducts/car-png-39058.png';
import carImg5 from '../../Assets/PopularProducts/car-png-39068.png';
import carImg6 from '../../Assets/PopularProducts/honda-brv-pictures-46915.png';
import carImg7 from '../../Assets/PopularProducts/bmw-car-png-2094.png';
import carImg8 from '../../Assets/PopularProducts/car-png-39054.png';

export const PopularProducts = () => {
    const carModal = [
        {
            carImg: carImg1,
            description:
                'A sleek and modern car with advanced features and impressive performance. Experience the thrill of driving with this stylish vehicle',
            price: '$50,000'
        },
        {
            carImg: carImg2,
            description: 'Explore the city in this compact and efficient car. Perfect for urban commuting and navigating tight spaces with ease.',
            price: '$20,000'
        },
        {
            carImg: carImg3,
            description: 'Get ready for an adventurous journey with this rugged and powerful SUV. Conquer any terrain and enjoy a comfortable ride for the whole family.',
            price: '$40,000'
        },
        {
            carImg: carImg4,
            description: 'Experience luxury at its finest with this elegant and sophisticated sedan. Indulge in the finest craftsmanship and cutting-edge technology.',
            price: '$30,000'
        },
        {
            carImg: carImg5,
            description: 'Embrace the open road with this convertible sports car. Feel the wind in your hair and enjoy the ultimate driving experience in this high-performance vehicle',
            price: '$60,000'
        },
        {
            carImg: carImg6,
            description: 'Discover versatility and practicality in this spacious and comfortable SUV. Designed for the modern family, it offers ample space and safety features',
            price: '$35,000'
        },
        {
            carImg: carImg7,
            description: 'Unleash your inner thrill-seeker with this luxury sports car. With its powerful engine and dynamic design, it delivers an exhilarating driving experience.',
            price: '$70,000'
        },
        {
            carImg: carImg8,
            description: 'Cruise in style with this compact and fuel-efficient hatchback. Perfect for city dwellers who prioritize efficiency without compromising on style.',
            price: '$25,000'
        },
    ];

    const backgroundColor = '#eae8e8cc';

    return (
        <div className='p-5'>
            <Container>
                <h4 className='mb-4'>Popular Products</h4>
                <Row className='text-align-right d-flex flex-wrap'>
                    {carModal.map((item, i) => (
                        <Col key={i} sm={6} md={4} lg={3} className='d-flex flex-wrap mt-4'>
                            <CardComponent carImg={item.carImg} backgroundColor={backgroundColor} description={item.description} price={item.price} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
