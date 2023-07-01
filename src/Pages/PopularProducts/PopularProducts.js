import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CardComponent } from '../ReusableComponent/CardComponent';
import { motion } from 'framer-motion';
import carImg1 from '../../Assets/PopularProducts/car-front-png-32726.png';
import carImg2 from '../../Assets/PopularProducts/car-png-16828 (1).png';
import carImg3 from '../../Assets/PopularProducts/car-png-39054.png';
import carImg4 from '../../Assets/PopularProducts/car-png-39058.png';
import carImg5 from '../../Assets/PopularProducts/car-png-39068.png';
import carImg6 from '../../Assets/PopularProducts/honda-brv-pictures-46915.png';
import carImg7 from '../../Assets/PopularProducts/bmw-car-png-2094.png';
import carImg8 from '../../Assets/PopularProducts/car-png-39054.png';
import carImg9 from '../../Assets/PopularProducts/4-red-r8-audi-png-car-image.png';
import carImg10 from '../../Assets/PopularProducts/84665-car-2017-corolla-toyota-family-download-free-image.png';
import carImg11 from '../../Assets/PopularProducts/161763-aventador-lamborghini-pic-sports-free-transparent-image-hd.png';
import carImg12 from '../../Assets/PopularProducts/32902-5-bugatti-file.png';

export const PopularProducts = () => {
    const carModal = [
        {
            carImg: carImg1,
            description: 'Porsche Boxster - Sports Car',
            price: '$50,000',
        },
        {
            carImg: carImg2,
            description: 'Audi S4 - SUV',
            price: '$20,000',

        },
        {
            carImg: carImg3,
            description: 'Mercedes-Benz GLE - SUV',
            price: '$40,000',
        },
        {
            carImg: carImg4,
            description: 'Mercedes-Benz SL-Class - Sport Car',
            price: '$30,000',

        },
        {
            carImg: carImg5,
            description: 'Mercedes-Benz GLK350 - SUV',
            price: '$60,000',
            carType: 'SUV'
        },
        {
            carImg: carImg6,
            description: 'Honda BR-V - SUV Car',
            price: '$35,000',

        },
        {
            carImg: carImg7,
            description: 'Rastar R/C BMW i8 - Sports Car',
            price: '$70,000',
        },
        {
            carImg: carImg8,
            description: 'Mercedes-Benz ML63 AMG - SUV',
            price: '$25,000',
        },
        {
            carImg: carImg9,
            description: 'Mercedes-Benz ML63 AMG - SUV',
            price: '$25,000',
        },
        {
            carImg: carImg10,
            description: 'Mercedes-Benz ML63 AMG - SUV',
            price: '$25,000',
        },
        {
            carImg: carImg11,
            description: 'Mercedes-Benz ML63 AMG - SUV',
            price: '$25,000',
        },
        {
            carImg: carImg12,
            description: 'Bugatti File - Sports Car',
            price: '$25,000',
        },
    ];

    const backgroundColor = '#eae8e8cc';

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        >
            <div className='p-5'>
                <Container>
                    <h4 className='mb-4 h4'>Popular Products</h4>
                    <Row className='text-align-right d-flex flex-wrap'>
                        {carModal.map((item, i) => (
                            <Col key={i} sm={6} md={4} lg={3} className='d-flex flex-wrap mt-4'>
                                <CardComponent
                                    carImg={item.carImg}
                                    backgroundColor={backgroundColor}
                                    description={item.description}
                                    price={item.price}
                                    carType={item.carType}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </motion.div>
    );
};
