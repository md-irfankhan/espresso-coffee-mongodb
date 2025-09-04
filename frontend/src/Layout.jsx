import { Outlet } from "react-router";
import Nav from "./components/Nav/Nav";


const Layout = () => {
    return (
        <div>
            <nav>
            <Nav></Nav>
            </nav>
            <section>
               <Outlet></Outlet>
            </section>
            <footer>

            </footer>
            
        </div>
    );
};

export default Layout;