import React from 'react';

const BookmarkedItem = (props) => {
    return (
        <div className='p-5 my-3 bg-white rounded-md'>
            <h2 className='text-xl font-semibold'>
                {props.data.blog_title}
            </h2>
        </div>
    );
};

export default BookmarkedItem;