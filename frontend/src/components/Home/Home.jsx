import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Instagram from "../Instagram/Instagram";
import ProductPage from "../ProductPage/ProductPage";


const Home = () => {
    return (
        <div>
            <header>
                <Banner></Banner>
            </header>
            <section>
                <Features></Features>
            </section>
            <section>
                <ProductPage></ProductPage>
            </section>
            <section>
                <Instagram></Instagram>
            </section>
            
        </div>
    );
};

export default Home;