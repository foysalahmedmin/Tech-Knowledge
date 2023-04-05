import Cards from '../Cards/Cards';
import Bookmark from '../Bookmark/Bookmark';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb, deleteDb, getBookMarkedItems, getReadTime, readTimeToDb } from '../../utilities/localStorageManage';


const Home = () => {
    const [cardsData, setCardsData] = useState([])
    const [readTime , setReadTime] = useState(0)
    const [bookmarked , setBookmark] = useState([])
    useEffect(() => {
        fetch("blogs_data.json")
        .then(res => res.json())
        .then(data => setCardsData(data))
    }, [])

    useEffect(()=>{
        const readTimeFromDb = getReadTime()
        setReadTime(readTimeFromDb);
        const bookMarkData = getBookMarkedItems();
        const bookMarkDataForShow = []
        if(cardsData[0]){
            for(const bookMarkedId of bookMarkData){
                const update = cardsData.find(singleData => singleData.id == bookMarkedId)
                bookMarkDataForShow.push(update);
            };
            setBookmark(bookMarkDataForShow);
        }
    },[cardsData])

    const readTimeHandler = (time) =>{
        setReadTime(readTime + time);
        readTimeToDb(time);
    }
    const bookmarkHandler = (data) => {
        addToDb(data.id)
        const exist = bookmarked.find(singleData => singleData.id === data.id)
        if(!exist){
            setBookmark([...bookmarked, data])
        }else{
            toast("You Have Already Bookmarked This Blog!")
        }
    }
    const removeData = () => {
        deleteDb()
        setReadTime(0)
        setBookmark([])
    }
    return (
        <section className='mt-20'>
            <div className="container mx-auto px-[2.5%] lg:flex gap-1">
                <Cards data={cardsData} readTimeHandler = {readTimeHandler} bookmarkHandler= {bookmarkHandler}></Cards>
                <Bookmark totalTime= {readTime} bookmarked={bookmarked}  removeData= {removeData}></Bookmark>
            </div> 
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Home;