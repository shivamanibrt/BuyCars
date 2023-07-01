import React from 'react'
import { PrivatePage } from '../../Pages/PrivatePage/PrivatePage'

export const AdminLayout = ({ children }) => {
    return (
        <PrivatePage>
            <div className='user-layout'>
                <div className='left'>
                    <h1>
                        Hi hello
                    </h1>
                </div>
                <div className='right'>
                    <div>{children}</div>
                </div>
            </div>
        </PrivatePage>

    )
}
