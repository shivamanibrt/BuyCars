import React from 'react'

import { HeroSection } from '../HeroSection/HeroSection'
import { CarTypes } from '../CarTypes/CarTypes'
import { PopularProducts } from '../PopularProducts/PopularProducts'

import { Cart } from '../Cart/Cart'

export const Home = () => {
    return (
        <div>

            <HeroSection />
            <CarTypes />
            <PopularProducts />

            <Cart />
        </div >
    )
}
