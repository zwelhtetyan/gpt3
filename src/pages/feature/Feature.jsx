import React from 'react';
import Gpt3Card from '../../utilities/gpt3Card/Gpt3Card';
import './feature.css';

const Feature = () => {
    return (
        <div className='feature padding__section bg__gradient' id='feature'>
            <div className='feature__left'>
                <h2 className='gradient__text'>
                    The Future is Now and You Just Need To Realize It. Step into
                    Future Today & Make it Happen.
                </h2>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='feature__right'>
                <Gpt3Card
                    title='Improving end distrusts instantly '
                    text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
                />
                <Gpt3Card
                    title='Become the tended active'
                    text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
                />
                <Gpt3Card
                    title='Message or am nothing'
                    text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
                />
                <Gpt3Card
                    title='Really boy law county'
                    text='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
                />
            </div>
        </div>
    );
};

export default Feature;
