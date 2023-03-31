import React from 'react';

const Bookmark = (props) => {
    console.log(props.totalTime);
    return (
        <div className='w-[350px] mt-9 bg-gray-300 ' >
            <div className='text-center p-5 border border-purple-900 bg-purple-300 rounded-lg mb-9'>
                <h1>
                    Spent time on read : {props.totalTime} min;
                </h1>
            </div>
            <div className=' bg-gray-100 rounded-lg'>


            </div>
            
        </div>
    );
};

export default Bookmark;