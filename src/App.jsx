
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Headers/Header'


function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setreadingTime] =useState(0);

  const handleAddToBookmarks = blog=>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (Id,time) =>{
   const newReadingTime = readingTime +time;
   setreadingTime(newReadingTime);
  //  remove read the blog
// console.log('remove bookmark',Id)
const remainingBookMarkk = bookmarks.filter(bookmark => bookmark.Id!==Id)
setBookmarks(remainingBookMarkk);
  }


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks readingTime={readingTime}  bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
