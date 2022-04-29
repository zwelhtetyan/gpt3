import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropBox, shopify } from './import';

const Brand = () => {
    return (
        <div className='brand'>
            <img src={google} alt='' />
            <img src={slack} alt='' />
            <img src={atlassian} alt='' />
            <img src={dropBox} alt='' />
            <img src={shopify} alt='' />
        </div>
    );
};

export default Brand;
