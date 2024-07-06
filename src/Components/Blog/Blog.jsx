import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
    const {Id,Title,Cover,Author_Img,Reading_Time,Author,Posted_Date,Hashtag}=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={Cover} alt={`cover picture of the title ${Title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                     <img className='w-14 rounded-full' src={Author_Img} alt="" />
                     <div className='ml-6'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>{Posted_Date}</p>
                     </div>
                </div>
                <div >
                   <span>{Reading_Time} min read</span>
                   <button onClick={()=>handleAddToBookmarks(blog)}
                   className='ml-3 text-red-600 text-2xl'>
                    <CiBookmark></CiBookmark>
                    </button>
                </div>
            </div>
            <h2>name:{Title}</h2>
           <p>
            {
                Hashtag.map((hash,idx)=> <span key={idx}><a href="">{hash}</a></span> )
            }
            
           </p>
           <button
           onClick={() => handleMarkAsRead(Id,Reading_Time)} 
           className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;