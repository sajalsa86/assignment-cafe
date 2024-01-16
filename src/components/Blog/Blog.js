import React, { useEffect, useState } from 'react';
import './Blog.css';
import { getTimeDifference } from '../../utilitis/date1';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { images, author, authorName, blogTitle, readTime } = props.info;
    const publishDate = "2024-01-09T12:00:00.000Z";
    const formattedDate = getTimeDifference(publishDate);

    //react fontawesome
    const bmarkIcon = <FontAwesomeIcon icon={faBookmark} />
    //count
    const controlCount = props.controlCount;
    const markedNumAndBlog = () => {
        props.markedNumAndBlog(props.info.information);
    };

    // const markedNumAndBlog = props.markedNumAndBlog;
    return (
        <div>
            <div className='blog'>
                <img src={images} alt="" />
                <div className="author-container">
                    <div className="author">
                        <img src={author} alt="" />
                        <div className="author-info">
                            <h5>{authorName}</h5>
                            <p>{formattedDate}</p>
                        </div>
                    </div>
                    <div className="read-time">
                        <p>{readTime} min read <span onClick={markedNumAndBlog} className='markIcon'>{bmarkIcon}</span></p>
                    </div>
                </div>
                <h2> {blogTitle} </h2>
                <p> <span style={{ marginRight: '10px' }}>#beginners</span><span>#programming</span> </p>
                <h6 onClick={() => controlCount(readTime)}> Mark as read </h6>
            </div>
        </div>
    );
};
//
export default Blog;
