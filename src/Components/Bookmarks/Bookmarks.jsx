
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-200 rounded-lg p-4 m-4">
         <div className='text-3xl text-center p-3 bg-zinc-100'>
                <h2>Reading Time: {readingTime}</h2>
            </div>
            <h2 className="text-3xl text-center ">BookMarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmarks,idx) => <Bookmark 
                key={idx} bookmarks={bookmarks}></Bookmark>)
            }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks