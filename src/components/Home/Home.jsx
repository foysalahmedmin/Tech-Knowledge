import Cards from '../Cards/Cards';
import Bookmark from '../Bookmark/Bookmark';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        const exist = bookmarked.find(singleData => singleData.id === data.id)
        if(!exist){
            setBookmark([...bookmarked, data])
        }else{
            toast("You Have Already Bookmarked This Blog!")
        }
    }
    return (
        <section className='mt-20'>
            <div className="container mx-auto px-[2.5%] lg:flex gap-3 border-b-2">
                <Cards data={cardsData} readTimeHandler = {readTimeHandler} bookmarkHandler= {bookmarkHandler} ></Cards>
                <Bookmark totalTime= {readTime} bookmarked={bookmarked}></Bookmark>
            </div> 
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Home;