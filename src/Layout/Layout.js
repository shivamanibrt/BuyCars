import React from 'react'
import { NavigationBar } from './NavigationBar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
    return (
        <div>
            <NavigationBar />
            <div className='main'>
                {children}
            </div>
            <Footer />
        </div>
    )
}
