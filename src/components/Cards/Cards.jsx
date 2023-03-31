import React from 'react';
import Card from '../Card/Card';

const Cards = (props) => {
    const data = props.data
    console.log(props.data);
    return (
        <div className='h-screen-s overflow-y-scroll flex-1 scroll-hide' >
            {
                data.map(singleData => <Card data={singleData} key = {singleData.id} readTimeHandler = {props.readTimeHandler} bookmarkHandler = {props.bookmarkHandler}></Card>)
            }
        </div>
    );
};

export default Cards;