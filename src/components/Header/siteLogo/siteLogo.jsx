import React from "react";
import { Link } from "react-router-dom";
import logo1x from './img/Logo@1x.png';
import logo2x from './img/Logo@2x.png';

export const SiteLogo = () => {
    return (
        <Link to="/">
            <img
                src={logo1x}
                srcSet={`${logo1x} 1x, ${logo2x} 2x`}
                alt="Logo" 
            />
        </Link>
    );
};
