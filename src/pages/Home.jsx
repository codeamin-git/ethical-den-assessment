import AboutUs from "../components/Home/AboutUs";
import Banner from "../components/Home/Banner";
import Navbar from "../shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <AboutUs />
        </div>
    );
};

export default Home;