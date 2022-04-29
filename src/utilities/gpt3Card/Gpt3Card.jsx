import React from 'react';
import './gpt3Card.css';

const Gpt3Card = ({ title, text }) => {
    return (
        <div className='card'>
            <div className='card__title'>
                <div className='gradient__bar' />
                <h2>{title}</h2>
            </div>
            <div className='card__text'>{text}</div>
        </div>
    );
};

export default Gpt3Card;
