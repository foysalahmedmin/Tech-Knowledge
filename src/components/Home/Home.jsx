import Cards from '../Cards/Cards';
import Bookmark from '../Bookmark/Bookmark';
import React, { useEffect, useState } from 'react';


const Home = () => {
    const [cardsData, setCardsData] = useState([])
    const [readTime , setReadTime] = useState(0)
    const [bookmarked , setBookmark] = useState([])
    useEffect(() => {
        fetch("blogs_data.json")
        .then(res => res.json())
        .then(data => setCardsData(data))
    }, [])
    const readTimeHandler = (time) =>{
        setReadTime(readTime + time);
    }
    const bookmarkHandler = (data) => {
        setBookmark([...bookmarked, data])
    }
    return (
        <section className='mt-20'>
            <div className="container mx-auto px-[2.5%] flex gap-3">
                <Cards data={cardsData} readTimeHandler = {readTimeHandler} bookmarkHandler= {bookmarkHandler} ></Cards>
                <Bookmark totalTime= {readTime} bookmarked={bookmarked}></Bookmark>
            </div> 
        </section>
    );
};

export default Home;