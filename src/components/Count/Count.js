import React from 'react';
import './Count.css';
const Count = ({ totalTime, totalMark, markedBlogs }) => {
    return (
        <div className='count-container'>
            <div className='time-box'>
                <h3>Spent time on read:{totalTime} min</h3>
            </div>
            <div className='bookmark-container'>
                <h3>Bookmarked Blogs: {totalMark}</h3>
                <div className='marked-blogs'>
                    {markedBlogs.map((blog, index) => (<p key={index}>{blog}</p>))}
                </div>
            </div>
        </div>
    );
};
//
export default Count;

