/* eslint-disable react/no-unescaped-entities */
import { PiPhoneCall } from "react-icons/pi";
import { BsBoxes } from "react-icons/bs";
import bannerImg from '../../assets/images/Banner.png'
import match from '../../assets/icons/match.png'
import puzzle from '../../assets/icons/puzzle.png'
import management from '../../assets/icons/management.png'
import connect from '../../assets/icons/connect.png'
import navi from '../../assets/icons/navi.png'
import ask from '../../assets/icons/ask.png'

const Banner = () => {
    const tags = <>
        <p>Trusted By</p>
        <p className="flex items-center font-bold gap-1"><img src={match} alt="" className="w-6" /> Match</p>
        <p className="flex items-center font-bold gap-1"><img src={puzzle} alt="" className="w-6" /> Puzzle</p>
        <p className="flex items-center font-bold gap-1"><img src={management} alt="" className="w-6" /> Management</p>
        <p className="flex items-center font-bold gap-1"><img src={connect} alt="" className="w-6" /> Connect</p>
        <p className="flex items-center font-bold gap-1"><img src={navi} alt="" className="w-6" /> Navi</p>
        <p className="flex items-center font-bold gap-1"><img src={ask} alt="" className="w-6" /> ask</p>
    </>

    return (
        <section>
            <div className="container mx-auto flex flex-col items-center justify-center text-center mb-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Let's learn & gain skills
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-6 text-slate-400">
                    Lorem ipsum dolor sit amet consectetur. In at mauris sollicitudin phasellus enim tellus et. Lectus mauris consequat nam leo eget.Lorem ipsum dolor sit amet consectetur. In at mauris sollicitudin phasellus enim tellus et. Lectus mauris consequat nam leo eget.
                </p>
                <div className="flex gap-4 flex-col md:flex-row mb-10">
                    <button className="bg-primary text-black px-4 py-3 rounded-full hover:bg-opacity-80 font-bold flex items-center gap-1">
                        <PiPhoneCall className="text-2xl" />
                        Schedule A Call
                    </button>
                    <button className="bg-[#232526] px-4 py-3 rounded-full hover:bg-gray-100 hover:text-black font-bold flex items-center gap-1">
                        <BsBoxes className="text-xl" />
                        View Case Studies
                    </button>
                </div>
                {/* banner image */}
                <img src={bannerImg} alt="banner-image" />
            </div>

            <div className="container mx-auto bg-[#141212] flex flex-col gap-2 md:flex-row items-center justify-evenly py-10">
                {tags}
            </div>
        </section>
    );
};

export default Banner;