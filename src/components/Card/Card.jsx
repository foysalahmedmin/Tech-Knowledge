import React from 'react';
import bookmark from '../../assets/bookmark-regular.svg'
const Card = (props) => {
    const {id, author_name, blog_title, author_picture, blog_picture, read_time, date} = props.data ;
    const actualDate = new Date(date);
    const distanceDay = parseInt(Math.abs((actualDate - new Date()) / 86400000))
    return (
        <div className='card shadow-xl w-full overflow-hidden my-9'>
            <div className='max-h-[450px] overflow-hidden'>
                <img className='w-full' src= {blog_picture} alt="" />
            </div>
            <div className="card-body justify-between">
                <div className='w-full flex justify-between items-center gap-3'>
                    <div className='flex gap-5 items-center'>
                        <img className='w-10 h-10 rounded-full' src= {author_picture} alt="" />
                        <div>
                            <h3 className='text-xl font-semibold capitalize'>{author_name}</h3>
                            <p> {date}  ({distanceDay} Days ago)</p>
                        </div>
                    </div>
                    <p className='flex justify-end items-center'>{read_time} min read
                        <button onClick={() => props.bookmarkHandler(props.data)} className='btn btn-ghost'>
                            <img className='h-4' src= {bookmark} alt="" />
                        </button>
                    </p>
                </div>
                <h1 className="text-2xl font-bold mb-4">{blog_title}</h1>
                <p className=''>#beginners #programming</p>
                <div>
                    <button onClick={() => props.readTimeHandler(read_time)} className='btn btn-link m-0 p-0'>Mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default Card;