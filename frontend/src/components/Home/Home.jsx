import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Instagram from "../Instagram/Instagram";


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
                <Instagram></Instagram>
            </section>
            
        </div>
    );
};

export default Home;