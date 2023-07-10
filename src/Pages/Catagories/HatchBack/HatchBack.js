import React from 'react';
import { Catagories } from '../Catagories';
import { CardComponent } from '../../../Components/ReusableComponent/CardComponent';
import { useSelector } from 'react-redux';
import { Alert, Col, Row } from 'react-bootstrap';

export const HatchBack = () => {
    const { car } = useSelector(state => state.car);

    // Filter the car imports to display only HatchBack cars
    const hatchbackCars = car.filter(item => item.carType === 'HatchBack');

    return (
        <Catagories>
            <h5 className='categories-p'>Showing {hatchbackCars.length} Cars of {car.length} total Cars</h5>

            <div>HatchBack Cars</div>
            <Row className='text-align-right d-flex flex-wrap'>
                {hatchbackCars.length > 0 ? (
                    hatchbackCars.map(item => (
                        <Col key={item.id} sm={6} md={4} lg={3} className='d-flex flex-wrap mt-4'>
                            <CardComponent
                                carId={item.id}
                                carImg={item.carImg}
                                carType={item.carType}
                                price={item.carPrice}
                                description={item.description}
                            />
                        </Col>
                    ))
                ) : (
                    <div className='d-flex justify-content-center align-items-center p-5' style={{ width: '100%' }} >
                        <Alert>No Cars Found</Alert>
                    </div>
                )}
            </Row>
        </Catagories>
    );
};
