import { Outlet } from "react-router";


const Layout = () => {
    return (
        <div>
            <nav>

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