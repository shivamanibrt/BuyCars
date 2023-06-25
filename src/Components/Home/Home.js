import React from 'react'
import { HeroSection } from '../HeroSection/HeroSection'
import { CarTypes } from '../CarTypes/CarTypes'
import { PopularProducts } from '../PopularProducts/PopularProducts'

export const Home = () => {
    return (
        <div>
            <HeroSection />
            <CarTypes />
            <PopularProducts />
        </div>
    )
}
