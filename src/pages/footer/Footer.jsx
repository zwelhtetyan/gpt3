import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <h1 className='gradient__text footer__title'>
                Do you want to step in to the future before others
            </h1>
            <button className='footer__button'>Request Early Access</button>
            <div className='footer__detail__container'>
                <div className='footer__detail-logo'>
                    <img src={logo} alt='' />
                    <p>
                        NewYork K12 182 DK Landon, <br /> All Rights Reserved.
                    </p>
                </div>
                <div className='footer__detail-link'>
                    <p>Links</p>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='footer__detail-company'>
                    <p>Company</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='footer__detail-getInTouch'>
                    <p>Get in touch</p>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <p className='copy-right'>© 2022 GPT-3. All rights reserved.</p>
        </div>
    );
};

export default Footer;
