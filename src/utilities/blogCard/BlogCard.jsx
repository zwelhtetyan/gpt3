import React from 'react';
import './blogCard.css';

const BlogCard = ({ img, date, title }) => {
    return (
        <div className='blog__card'>
            <img src={img} alt='' />
            <div className='blog__card-body'>
                <p>{date}</p>
                <h2>{title}</h2>
                <p>Read Full Article</p>
            </div>
        </div>
    );
};

export default BlogCard;
