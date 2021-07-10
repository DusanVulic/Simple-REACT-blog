import { useState } from "react";
import { useHistory } from "react-router-dom";




const Create = () => {

    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('Bagzi');
    const [isPosting,setIsPosting]=useState(false);

    const history= useHistory();



   const titleHandler=(event)=>{
   setTitle(event.target.value);
   }

   const bodyHandler=(event)=>{
       setBody(event.target.value);
   }

   const authorHandler=(event)=>{
       setAuthor(event.target.value);
   }


   const submitFormHandler=(event)=>{
          event.preventDefault();
          const newBlog={title,body,author };
          setIsPosting(true);

          fetch('http://localhost:8000/blogs',{
              method:'POST',
              headers: {"Content-Type":"application/json"},
              body:JSON.stringify(newBlog)
          }).then(()=>{console.log('new blog added');
                        setIsPosting(false);
                        history.push('/');    
                     });
   }



    return (
        <div className='create'>
            <h2>Add New Blog </h2>
            <form  onSubmit={submitFormHandler}>
                <label>Blog title : </label>
                <input
                type="text"
                required
                value={title}
                onChange={titleHandler}
                />
                <label>Blog body : </label>
                <textarea 
                required
                value={body}
                onChange={bodyHandler}
                >
                </textarea>
                <label>Author : </label>
                <select  
                value={author}
                onChange={authorHandler}
                >
                    <option value="Bagzi">Bagzi</option>
                    <option value="Pako">Pako</option>
                </select>
                { !isPosting && <button>Add Blog</button>}
                { isPosting && <button disabled >Adding New Blog...</button>}

                <div className={"input-preview"}>
                    <p>BLOG PREVIEW:</p>
                      <p>{title}</p>
                      <p className={"body-preview"}>{body}</p>
                      <p>{author}</p>
                </div>
              
               
            </form>
        </div>
      );
}
 
export default Create;
