import React from 'react';
import BookmarkedItem from '../BookmarkedItem/BookmarkedItem';

const Bookmark = (props) => {
    const bookmarked_items = props.bookmarked ;
    return (
        <div className='lg:h-screen-s lg:scroll-hide lg:overflow-y-scroll lg:w-[350px] w-full px-5 shadow-xl' >
            <div className='text-center p-5 border border-sky-900 text-sky-900 bg-sky-100 rounded-lg my-9'>
                <h1 className='text-xl font-bold'>
                    Spent time on read : {props.totalTime} Min
                </h1>
            </div>
            <div className=' bg-gray-100 rounded-lg p-7'>
                <h2 className='text-xl font-bold'>Bookmarked Blogs : {bookmarked_items.length}</h2>
                {
                    bookmarked_items.map((singleItem, index) => <BookmarkedItem data = {singleItem} key = {index}></BookmarkedItem>)
                }
            </div>
            {
                (props.totalTime || props.bookmarked[0])?  <button onClick={props.removeData} className='btn bg-sky-900 w-full font-semibold h-2 my-9'>Clear Data</button> : <div></div>
            }
        </div>
    );
};

export default Bookmark;