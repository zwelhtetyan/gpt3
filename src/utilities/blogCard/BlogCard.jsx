import React from 'react';
import './blogCard.css';
import AOS from 'aos';

const BlogCard = ({ img, date, title }) => {
    return (
        <div className='blog__card' data-aos='zoom-in'>
            <img src={img} alt='' />
            <div className='blog__card-body'>
                <p>{date}</p>
                <h2>{title}</h2>
                <p>Read Full Article</p>
            </div>
        </div>
    );
};

AOS.init();

export default BlogCard;
