import { Link } from "react-router-dom";
const Err = () => {
    return (
    <div className="notfound text-color err-page">
        <h3>Something went wrong</h3>
        <Link className=" btn home-link head-background-color text-color" to="/">Home</Link>
    </div>
    );
}
 
export default Err;