import React from 'react'

import { HeroSection } from '../HeroSection/HeroSection'
import { CarTypes } from '../CarTypes/CarTypes'
import { PopularProducts } from '../PopularProducts/PopularProducts'
import { NewsLetter } from '../NewsLetter/NewsLetter'
import { Cart } from '../Cart/Cart'

export const Home = () => {
    return (
        <div>

            <HeroSection />
            <CarTypes />
            <PopularProducts />
            <NewsLetter />
            <Cart />
        </div >
    )
}
