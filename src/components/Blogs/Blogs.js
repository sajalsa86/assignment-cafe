import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
import Count from '../Count/Count';
import toast from 'react-hot-toast';

const Blogs = () => {
    const [information, setInformation] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalMark, setTotalMark] = useState(0);
    const [markedBlogs, setMarkedBlogs] = useState([]); // State to hold an array of marked blogs

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInformation(data))
    }, [])

    const controlCount = (time) => {
        setTotalTime(prevTotalTime => prevTotalTime + time);
    };

    /* const markedNumAndBlog = (markedBlog) => {
        setTotalMark(prevTotalmark => prevTotalmark + 1);
        setMarkedBlogs(prevMarkedBlogs => [...prevMarkedBlogs, markedBlog]);
    }; */
    const markedNumAndBlog = (markedBlog) => {
        if (!markedBlogs.includes(markedBlog)) {
            setTotalMark(prevTotalmark => prevTotalmark + 1);
            setMarkedBlogs(prevMarkedBlogs => [...prevMarkedBlogs, markedBlog]);
            toast.success('Blog bookmarked successfully!');
        } else {
            toast.error('Blog is already bookmarked!');
        }
    };
    return (
        <main>
            <div className='blogs'>
                {information.map(info => <Blog
                    key={info.id}
                    info={info}
                    controlCount={controlCount}
                    markedNumAndBlog={markedNumAndBlog}
                ></Blog>)}
            </div>
            <div>
                <Count
                    totalTime={totalTime}
                    totalMark={totalMark}
                    markedBlogs={markedBlogs}
                ></Count>
            </div>
        </main>
    );
};
//
export default Blogs;
