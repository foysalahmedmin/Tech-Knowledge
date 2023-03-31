import React from 'react';
import BookmarkedItem from '../BookmarkedItem/BookmarkedItem';

const Bookmark = (props) => {
    console.log(props.bookmarked);
    const bookmarked_items = props.bookmarked ;
    return (
        <div className='h-screen-s overflow-y-scroll w-[350px] scroll-hide' >
            <div className='text-center p-5 border border-purple-900 text-purple-900 bg-purple-100 rounded-lg my-9'>
                <h1 className='text-xl font-bold'>
                    Spent time on read : {props.totalTime} min;
                </h1>
            </div>
            <div className=' bg-gray-100 rounded-lg p-7'>
                <h2 className='text-xl font-bold'>Bookmarked Blogs : {bookmarked_items.length}</h2>
                {
                    bookmarked_items.map((singleItem, index) => <BookmarkedItem data = {singleItem} key = {index}></BookmarkedItem>)
                }
            </div> 
        </div>
    );
};

export default Bookmark;