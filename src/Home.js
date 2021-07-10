
import BlogList from './BlogList';
import UseFetch from './UseFetch';

const Home = () => {
 
   const { data :blogs,isPending,error}=UseFetch('http://localhost:8000/blogs'); 
    


    


  return (
    <div className="home">
      {error && <div className={'error-message'}> {error}</div>}
      {isPending && <div>Loading.... </div>}
      {blogs && <BlogList  blogs={blogs} title={"All Blogs!"} /> }
     {/* {blogNote && <h2 className={"blog-note"}>THERE ARE NO BLOGS HERE...MAYBE ADD A NEW ONE  ? </h2>}  */}
     
    </div>
  );
};

export default Home;
