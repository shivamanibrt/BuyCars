import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Catagories = ({ children }) => {
    return (
        <div >
            <div className='categories-section'>
                <Container className='p-3'>
                    <div className='d-flex flex-wrap justify-content-between '>
                        <Link to='/newArrivals' className='btn-catagories'>New Arrivals</Link>

                        <Link to='/hatchback' className='btn-catagories'>Hatchback</Link>
                        <Link to='/suv' className='btn-catagories'>SUV</Link>
                        <Link to='/sportsCar' className='btn-catagories'>Sports Car</Link>
                        <Link to='/sedan' className='btn-catagories'>Sedan</Link>
                    </div>

                    <div className='mt-5'>
                        {children}
                    </div>
                </Container>
            </div>
        </div>
    );
};
