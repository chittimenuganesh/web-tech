import { Link } from "react-router-dom";

function NotFound() {
    return ( 
        <>
            <h2>404 - Page Not Found</h2>
            <Link to='/component'>Go Component</Link>
        </>
     );
}

export default NotFound;