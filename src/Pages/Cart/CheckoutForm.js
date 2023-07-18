import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

export const CheckoutForm = ({ totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement)
            });

            if (error) {
                setError(error.message);
                setLoading(false);
            } else {
                const response = await fetch('/payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        amount: totalPrice * 100, // Convert amount to cents
                        paymentMethodId: paymentMethod.id
                    })
                });

                const { clientSecret } = await response.json();

                const { error } = await stripe.confirmCardPayment(clientSecret);

                if (error) {
                    setError(error.message);
                } else {
                    setError(null);
                    // Payment succeeded, handle success
                }

                setLoading(false);
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
            setLoading(false);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} className="p-5 ">
                <CardElement className="card-input" />
                <Button type="submit" disabled={!stripe || loading} className="card-button" style={{ borderRadius: '0' }}>
                    Pay Now
                </Button>
                {error && <div className="error-message">{error}</div>}
            </Form>
        </Container>
    )
}
