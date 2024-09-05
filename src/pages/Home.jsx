import AboutUs from "../components/Home/AboutUs";
import Banner from "../components/Home/Banner";
import VideoTestimony from "../components/Home/VideoTestimony";
import Navbar from "../shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <AboutUs />
            <VideoTestimony />
        </div>
    );
};

export default Home;