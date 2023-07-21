import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromist = loadStripe("pk_test_51NTwd1AJwnX7JUtYOIF1esFhzRhQdKwysatFjGlTceduB2wfPfGKnOXkN6djL0fu9773vgW1XyFcwsLnytPBFmYT003qzmmj3M")

export const Checkout = () => {

    const [amout, setAmout] = useState(1000);

    return (
        <div>Checkout Feature</div>
    )
}
