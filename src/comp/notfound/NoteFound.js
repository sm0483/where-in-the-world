import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="notfound text-color">
            <h2>404</h2>
            <h3>Sorry, we couldn't find that page.</h3>
            <Link className=" btn home-link head-background-color text-color" to="/">Home</Link>
        </div>
    );
}
 
export default NotFound;