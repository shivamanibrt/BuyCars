import React from 'react';

import { PrivatePage } from '../../Pages/PrivatePage/PrivatePage';
import { Link } from 'react-router-dom';

import { LuLayoutDashboard } from 'react-icons/lu';
import { AiFillSetting } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { SiProducthunt } from 'react-icons/si';
import { useSelector } from 'react-redux';

export const AdminLayout = ({ children }) => {
    const { user } = useSelector((state) => state.user);

    return (
        <PrivatePage>
            <div className='user-layout'>
                <div className='left'>
                    <h3 className='text-center text-secondary mt-4'>Hi {user?.fName}!</h3>
                    <ul className='nav-links'>
                        {user?.uid && ( // Use conditional rendering with `&&`
                            <>
                                <li className='nav-item list-unstyled p-3'>
                                    <Link to='/dashboard' className='nav-link'>
                                        <LuLayoutDashboard size={25} /> Dashboard
                                    </Link>
                                </li>

                                <li className='nav-item list-unstyled p-3'>
                                    <Link to='/products' className='nav-link'>
                                        <SiProducthunt size={25} /> Products
                                    </Link>
                                </li>
                                <li className='nav-item list-unstyled p-3'>
                                    <Link to='/catgories' className='nav-link'>
                                        <AiOutlineShoppingCart size={25} /> Catagories
                                    </Link>
                                </li>

                                <li className='nav-item list-unstyled p-3'>
                                    <Link to='/dashboard' className='nav-link'>
                                        <AiFillSetting size={25} /> Setting
                                    </Link>
                                </li>

                                <li className='nav-item list-unstyled p-3'>
                                    <Link to='/profile' className='nav-link'>
                                        <ImProfile size={25} /> Profile
                                    </Link>
                                </li>
                            </>
                        )}

                    </ul>
                </div>

                <div className='right'>
                    <div>{children}</div>
                </div>
            </div>
        </PrivatePage>
    );
};
