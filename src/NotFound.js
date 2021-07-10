
import { Link } from "react-router-dom";


const NotFound = () => {
    return (


        <div className="not-foud">
            <h2>Sorry.... </h2>
            <p>that page cannot be found....</p>
            <Link to="/" >Back to the home page</Link>
        </div>
    );
}

export default NotFound;