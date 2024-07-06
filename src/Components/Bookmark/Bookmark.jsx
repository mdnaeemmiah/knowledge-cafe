import PropTypes from 'prop-types'

const Bookmark = ({bookmarks}) => {
    const{Title}= bookmarks;
    return (
        <div>
           
            <h3 className='text-2xl bg-slate-400 p-4 m-4 rounded-lg'>{Title}</h3>
        </div>
    );
};
Bookmark.prototype={
    bookmarks:PropTypes.object
    
}
export default Bookmark;