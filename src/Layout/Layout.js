import React from 'react'
import { NavigationBar } from './NavigationBar'
import { Footer } from './Footer'
import { NewsLetter } from '../Pages/NewsLetter/NewsLetter'

export const Layout = ({ children }) => {
    return (
        <div>
            <NavigationBar />
            <div className='main'>
                {children}
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}
