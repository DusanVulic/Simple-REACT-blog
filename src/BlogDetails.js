import { useHistory, useParams } from "react-router-dom";
import UseFetch from './UseFetch';

const BlogDetails = () => {


const {id }=useParams(); 
const { data:blog,isPending,error } =UseFetch('http://localhost:8000/blogs/' +id);
const history= useHistory();


const deleteBlogHandler=()=>{

         fetch('http://localhost:8000/blogs/'+blog.id,{
             method:'DELETE'

         }).then(()=>{ 
             console.log('blog deleted');
            history.push('/'); 
         }) ; 
};



    return (  
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            {error && <div> Oooops...something went wrong !</div>}
            { blog && ( 
                <article>
                    <h2 className={'blog-detail-title' }>{blog.title}</h2>
                    <p className={'blog-detail-author' }> written by {blog.author}</p>
                    <div> {blog.body}</div>
                    <button onClick={deleteBlogHandler} className={'blog-delete-button'}>delete this blog</button>
                    <p>* what's done cannot be undone</p>
                </article>

            )}
        </div>
    );
}
 
export default BlogDetails; 