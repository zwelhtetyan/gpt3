import React from 'react';
import './register.css';
import AOS from 'aos';

const Register = () => {
    return (
        <div className='register' data-aos='flip-up'>
            <div className='register__card'>
                <div className='register__card-text'>
                    <p>Request Early Access to Get Started</p>
                    <h2>
                        Register today & start exploring the endless
                        possiblities.
                    </h2>
                </div>
                <div className='register__card-button'>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    );
};

AOS.init();

export default Register;
