import { Outlet } from "react-router";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";


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
                <Footer></Footer>

            </footer>
            
        </div>
    );
};

export default Layout;