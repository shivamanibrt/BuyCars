import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CardComponent } from '../ReusableComponent/CardComponent';
import suvImg from '../../Assets/Catagories/car-png-39061.png';
import sedanImg from '../../Assets/Catagories/honda-brv-pictures-46910.png';
import sportImg from '../../Assets/Catagories/car-png-39055.png';
import hatchBack from '../../Assets/Catagories/car-png-16828 (1).png';

export const CarTypes = () => {
    const carModal = [
        {
            carModal: 'Sports Car',
            carImg: sportImg,
            description: 'A high-performance sports car with sleek design and powerful engine.'
        },
        {
            carModal: 'HatchBack',
            carImg: hatchBack,
            description: 'A compact car with a rear door that opens upward to access the cargo area.'
        },
        {
            carModal: 'Sedan',
            carImg: sedanImg,
            description: 'A four-door car with separate compartments for the engine, passenger, and cargo.'
        },
        {
            carModal: 'Suv',
            carImg: suvImg,
            description: 'A sport utility vehicle designed for off-road capabilities and spacious interiors.'
        },
    ];

    return (
        <div>
            <Container className='p-3'>
                <Row className='text-align-right d-flex flex-wrap'>
                    {carModal.map((item, i) => (
                        <Col key={i}>
                            <CardComponent carModal={item.carModal} carImg={item.carImg} description={item.description} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
