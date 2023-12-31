import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CardComponent } from '../../Components/ReusableComponent/CardComponent';
import { motion } from 'framer-motion';
import suvImg from '../../Assets/Catagories/car-png-39061.png';
import sedanImg from '../../Assets/Catagories/honda-brv-pictures-46910.png';
import sportImg from '../../Assets/Catagories/bmw-car-png-2085.png';
import hatchBack from '../../Assets/Catagories/car-png-16828 (1).png';
import { useNavigate } from 'react-router-dom';

export const CarTypes = () => {
    const navigate = useNavigate();
    const carModal = [
        {
            carModel: 'Sports Car',
            carImg: sportImg,
            description: 'Hello',
            onClick: () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/sportsCar');
            }
        },
        {
            carModel: 'Hatchback',
            carImg: hatchBack,
            onClick: () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/hatchback');
            }
        },
        {
            carModel: 'SUV',
            carImg: sedanImg,
            onClick: () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/suv');
            }
        },
        {
            carModel: 'Sedan',
            carImg: suvImg,
            onClick: () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/sedan');
            }
        }
    ];

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20
            }}
        >
            <div className='p-4'>
                <Container className='p-3'>
                    <Row className='text-align-right d-flex flex-wrap'>
                        {carModal.map((item, i) => (
                            <Col key={i} sm={6} md={4} lg={3} className='d-flex flex-wrap mb-3'>
                                <CardComponent carModel={item.carModel} carImg={item.carImg} onClick={item.onClick} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </motion.div>
    );
};
