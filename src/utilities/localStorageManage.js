// use local storage to manage data
const addToDb = id => {
    const bookMarkedItems = getBookMarkedItems();
    const quantity = bookMarkedItems.indexOf(id);
    if (quantity == -1) {
        bookMarkedItems.push(id);
    }
    localStorage.setItem('BookMarked-Items', JSON.stringify(bookMarkedItems));
}

const removeFromDb = id => {
    const bookMarkedItems = getBookMarkedItems();
    const newBookMarkedItems = bookMarkedItems.filter(item => item !== id)
    localStorage.setItem('BookMarked-Items', JSON.stringify(newBookMarkedItems))
}

const getBookMarkedItems = () => {
    let BookMarked = [];

    //get the BookMarked-Items from local storage
    const BookMarkedDb = localStorage.getItem('BookMarked-Items');
    if (BookMarkedDb) {
        BookMarked = JSON.parse(BookMarkedDb);
    }
    return BookMarked;
}

const readTimeToDb = time =>{
    let readTime = getReadTime();
    readTime += time
    localStorage.setItem('read-time', readTime);
}
const getReadTime = () =>{
    let readTime = 0;
    const readTimeInDb = localStorage.getItem('read-time');
    if (readTimeInDb) {
        readTime = +readTimeInDb;
    }
    return readTime ;
}

const deleteDb = () => {
    localStorage.removeItem('BookMarked-Items');
    localStorage.removeItem('read-time');
}

export {
    addToDb,
    removeFromDb,
    getBookMarkedItems,
    deleteDb,
    readTimeToDb,
    getReadTime
}
