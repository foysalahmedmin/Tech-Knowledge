import React from 'react';
import Card from '../Card/Card';

const Cards = (props) => {
    const data = props.data
    console.log(props.data);
    return (
        <div>
            {
                data.map(singleData => <Card data={singleData} key = {singleData.id} readTimeHandler = {props.readTimeHandler} bookmarkHandler = {props.bookmarkHandler}></Card>)
            }
        </div>
    );
};

export default Cards;