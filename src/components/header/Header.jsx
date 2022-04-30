import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import AOS from 'aos';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left' data-aos='fade-right'>
                <h1 className='header__title gradient__text'>
                    Let’s Build Something amazing with GPT-3 OpenAI
                </h1>
                <p className='header__description'>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <div className='header__input-and-button'>
                    <input type='text' placeholder='Your Email Address' />
                    <button>Get Started</button>
                </div>
                <div className='header__people-and-text'>
                    <img src={people} alt='people' />
                    <p>
                        1,600 people requested access a visit in last 24 hours
                    </p>
                </div>
            </div>
            <div className='header__right__img-container' data-aos='fade-left'>
                <img src={ai} alt='ai' />
            </div>
        </div>
    );
};

AOS.init();

export default Header;
