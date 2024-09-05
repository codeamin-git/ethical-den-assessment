import AboutUs from "../components/Home/AboutUs";
import Banner from "../components/Home/Banner";
import Mentors from "../components/Home/Mentors";
import Outline from "../components/Home/Outline";
import Process from "../components/Home/Process";
import Testimonials from "../components/Home/Testimonials";
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
            <Testimonials />
            <Process />
        </div>
    );
};

export default Home;