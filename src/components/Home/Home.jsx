import Cards from '../Cards/Cards';
import Bookmark from '../Bookmark/Bookmark';
import React, { useEffect, useState } from 'react';


const Home = () => {
    const [cardsData, setCardsData] = useState([])
    useEffect(() => {
        fetch("blogs_data.json")
        .then(res => res.json())
        .then(data => setCardsData(data))
    }, [])
    return (
        <section>
            <div className="container mx-auto px-[2.5%] flex">
                <Cards data={cardsData} ></Cards>
                <Bookmark></Bookmark>
            </div> 
        </section>
    );
};

export default Home;