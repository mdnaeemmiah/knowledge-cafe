import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmarks,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('public/blogs.json')
        .then(res =>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h2 className="text-4xl">Blog:{blogs.length}</h2>
            {
                blogs.map(blog=> <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmarks={handleAddToBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.prototype={
    handleAddToBookmarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blogs;