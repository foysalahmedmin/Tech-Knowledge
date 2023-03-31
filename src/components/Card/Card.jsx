import React from 'react';
import bookmark from '../../assets/bookmark-regular.svg'
const Card = (props) => {
    const {id, author_name, blog_title, author_picture, blog_picture, read_time} = props.data ;
    return (
        <div className='max-w-[845px] overflow-hidden my-9'>
            <div className='h-[450px] overflow-hidden'><img className='w-full' src= {blog_picture} alt="" /></div>
            <div className='flex justify-between items-center my-7'>
                <div className='flex gap-5 items-center'>
                    <img className='w-10 h-10 rounded-full' src= {author_picture} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold capitalize'>{author_name}</h3>
                        <p>Mar 14 (4 Days ago)</p>
                    </div>
                </div>
                <p className='flex items-center'>{read_time} min read
                    <button className='ml-5'>
                        <img className='h-4' src= {bookmark} alt="" />
                    </button>
                </p>
            </div>
            <h1 className="text-2xl font-bold mb-4">{blog_title}</h1>
            <p className=''>#beginners #programming</p>
            <button onClick={() => props.readTimeHandler(read_time)} className='btn btn-link m-0 p-0'>Mark as read</button>
        </div>
    );
};

export default Card;