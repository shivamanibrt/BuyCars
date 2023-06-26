import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';
import { IoLogoYoutube } from 'react-icons/io';

export const Icons = () => {
    return (
        <div className="social-icons">
            <AiFillFacebook size={30} className="icon bi-facebook" />
            <AiFillTwitterSquare size={30} className="icon bi-twitter" />
            <IoLogoYoutube size={30} className="icon bi-youtube" />
            <AiFillInstagram size={30} className="icon bi-instagram" />
        </div>
    );
};
