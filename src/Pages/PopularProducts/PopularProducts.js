import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CardComponent } from '../../Components/ReusableComponent/CardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarsAction } from '../../Redux/Car/CarAction';

export const PopularProducts = () => {
    const { car } = useSelector(state => state.car);
    const backgroundColor = '#F0F0F0';

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCarsAction());
    }, [dispatch]);

    // Get the first 10 car items
    const popularCars = car.slice(0, 10);

    return (
        <div>
            <div className='p-5'>
                <Container>
                    <h4 className='mb-4 h4'>Popular Products</h4>
                    <Row className='text-align-right d-flex flex-wrap'>
                        {popularCars.map(item => (
                            <Col key={item.id} sm={6} md={4} lg={3} className='d-flex flex-wrap mt-4'>
                                <CardComponent
                                    carImg={item.carImg}
                                    backgroundColor={backgroundColor}
                                    carType={item.carType}
                                    price={item.carPrice}
                                    description={item.description}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};
