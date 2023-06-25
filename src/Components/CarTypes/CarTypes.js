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
            carModel: 'Sports Car',
            carImg: sportImg,
        },
        {
            carModel: 'Hatchback',
            carImg: hatchBack,
        },
        {
            carModel: 'Sedan',
            carImg: sedanImg,
        },
        {
            carModel: 'SUV',
            carImg: suvImg,
        },
    ];

    return (
        <div className='p-4'>
            <Container className='p-3'>
                <Row className='text-align-right d-flex flex-wrap'>
                    {carModal.map((item, i) => (
                        <Col key={i} className='d-flex flex-wrap car-types-img-filters'>
                            <CardComponent carModal={item.carModel} carImg={item.carImg} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
