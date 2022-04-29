import React from 'react';
import Gpt3Card from '../../utilities/gpt3Card/Gpt3Card';
import './whatIsGpt3.css';

const WhatISGpt3 = () => {
    return (
        <div className='whatisgpt' id='whatisgpt'>
            <div className='whatisgpt__card-container bg__whatgpt3'>
                <Gpt3Card
                    title='What is GPT-3'
                    text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
                />
                <div className='whatisgpt__card__center-text'>
                    <h2 className='gradient__text'>
                        The possibilities are beyond your imagination
                    </h2>
                    <p>Explore The Library</p>
                </div>
                <div className='gpt3__cards'>
                    <Gpt3Card
                        title='Chatbots'
                        text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
                    />
                    <Gpt3Card
                        title='Knowledgebase'
                        text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.'
                    />
                    <Gpt3Card
                        title='Education'
                        text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.'
                    />
                </div>
            </div>
        </div>
    );
};

export default WhatISGpt3;
