import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardComponent } from '../ReusableComponent/CardComponent';
import carImg1 from '../../Assets/PopularProducts/car-front-png-32722.png'
import carImg2 from '../../Assets/PopularProducts/car-png-16828 (1).png'
import carImg3 from '../../Assets/PopularProducts/car-png-39054.png'
import carImg4 from '../../Assets/PopularProducts/car-png-39058.png'
import carImg5 from '../../Assets/PopularProducts/car-png-39068.png'
import carImg6 from '../../Assets/PopularProducts/honda-brv-pictures-46915.png'
// import carImg7 from '../../Assets/PopularProducts/car-png-39058.png'

export const PopularProducts = () => {
    const carModal = [
        { carImg: carImg1, },
        { carImg: carImg2, },
        { carImg: carImg3, },
        { carImg: carImg4, },
        { carImg: carImg5, },
        { carImg: carImg6, },

    ];
    return (
        <div className='p-5'>
            <Container>
                <h4 className='mb-4'>Popular Products</h4>
                <Row className='text-align-right d-flex flex-wrap'>
                    {carModal.map((item, i) => (
                        <Col key={i} className='d-flex flex-wrap mt-4'>
                            < CardComponent carImg={item.carImg} />
                        </Col>
                    ))}
                </Row>
            </Container >
        </div >
    )
}
