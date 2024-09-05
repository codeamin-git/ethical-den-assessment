import AboutUs from "../components/Home/AboutUs";
import Banner from "../components/Home/Banner";
import Mentors from "../components/Home/Mentors";
import Outline from "../components/Home/Outline";
import VideoTestimony from "../components/Home/VideoTestimony";
import Navbar from "../shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <AboutUs />
            <VideoTestimony />
            <Outline />
            <Mentors />
        </div>
    );
};

export default Home;