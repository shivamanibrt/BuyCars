import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';


export const Icons = () => {
    return (
        <div className="social-icons">
            <BiLogoFacebook size={30} className="icon bi-facebook" />
            <AiOutlineTwitter size={30} className="icon bi-twitter" />
            <BsYoutube size={30} className="icon bi-youtube" />
            <AiFillInstagram size={30} className="icon bi-instagram" />
        </div>
    );
};
