import { NavLink,Outlet } from "react-router-dom";

const HomePage = () => {
    return ( 
        <div>
            <header className="d-flex justify-content-between align-items-around p-2 bg-primary text-light">
                <h1 className="d-inline m-4 text-light">Contacts</h1>
                <nav className="nav ">
                    <NavLink to="" className="m-3 p-1 text-light">Home</NavLink>
                    <NavLink to="contacts" className="m-3 p-1 text-light">Contacts</NavLink>
                    <NavLink to="add" className="m-3 p-1 text-light">Add contact</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>

        </div>
     );
}
 
export default HomePage;