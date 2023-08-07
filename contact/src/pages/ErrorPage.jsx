import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div>
            <h1 className="display-2 text-danger m-5">Error</h1>
            <p className="m-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia quia eveniet ea? Natus necessitatibus impedit voluptatum modi quis. Sunt consequuntur nam autem facilis, voluptates consectetur fugit architecto officia cum?</p>
            <Link to="/" className="m-5">Return to home page</Link>
        </div>
     );
}
 
export default ErrorPage;