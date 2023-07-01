import React from 'react'

import { HeroSection } from '../HeroSection/HeroSection'
import { CarTypes } from '../CarTypes/CarTypes'
import { PopularProducts } from '../PopularProducts/PopularProducts'
import { NewsLetter } from '../NewsLetter/NewsLetter'

export const Home = () => {
    return (
        <div>
            <HeroSection />
            <CarTypes />
            <PopularProducts />
            <NewsLetter />
        </div>
    )
}
