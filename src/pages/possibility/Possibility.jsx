import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className='possibility padding__section' id='possibility'>
            <div className='possibility__left'>
                <img src={possibility} alt='' />
            </div>
            <div className='possibility__right'>
                <p>Request Early Access to Get Started</p>
                <h2 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h2>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <p>Request Early Access to Get Started</p>
            </div>
        </div>
    );
};

export default Possibility;
