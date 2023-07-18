import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const Checkout = () => {
    const { cart } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);
    const stripePromise = loadStripe('pk_test_51NTwd1AJwnX7JUtYOIF1esFhzRhQdKwysatFjGlTceduB2wfPfGKnOXkN6djL0fu9773vgW1XyFcwsLnytPBFmYT003qzmmj3M');
    const calculateTotalPrice = () => {
        const userCart = cart.filter(item => item.userId === user?.uid);
        return userCart.reduce((total, item) => total + item.carPrice, 0);
    };

    const totalPrices = calculateTotalPrice();

    const [totalPrice, setTotalPrice] = useState(totalPrices);


    return (
        <Container className='mt-3'>
            <div className='shadow card-form p-4' >
                <h2>Checkout Page</h2>
                <p>Total Price: ${totalPrice}</p>
                <Elements stripe={stripePromise}>
                    <CheckoutForm totalPrice={totalPrice} />
                </Elements>
            </div>
        </Container >
    )
}
