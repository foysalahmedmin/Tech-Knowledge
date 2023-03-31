import React from 'react';
import Card from '../Card/Card';

const Cards = (props) => {
    const data = props.data
    return (
        <div className='lg:h-screen-s lg:scroll-hide lg:overflow-y-scroll flex-1' >
            {
                data.map(singleData => <Card data={singleData} key = {singleData.id} readTimeHandler = {props.readTimeHandler} bookmarkHandler = {props.bookmarkHandler}></Card>)
            }
        </div>
    );
};

export default Cards;