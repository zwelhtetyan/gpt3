import React from 'react';
import BlogCard from '../../utilities/blogCard/BlogCard';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './import';

const Blog = () => {
    return (
        <div className='blog' id='blog'>
            <div className='blog__container'>
                <h2 className='blog__title gradient__text'>
                    A lot is happening, <br /> We are blogging about it.
                </h2>
                <div className='blog__card__container'>
                    <div className='blog__card__group-A'>
                        <BlogCard
                            img={blog01}
                            date='Sep 26, 2021'
                            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                        />
                    </div>
                    <div className='blog__card__group-B'>
                        <div className='blog__card__group-B__roll-A'>
                            <BlogCard
                                img={blog02}
                                date='Sep 26, 2021'
                                title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            />
                            <BlogCard
                                img={blog03}
                                date='Sep 26, 2021'
                                title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            />
                        </div>

                        <div className='blog__card__group-B__roll-B'>
                            <BlogCard
                                img={blog04}
                                date='Sep 26, 2021'
                                title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            />
                            <BlogCard
                                img={blog05}
                                date='Sep 26, 2021'
                                title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
