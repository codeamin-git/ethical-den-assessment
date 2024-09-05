import VideoCard from "../VideoTestimony/VideoCard";
import video1 from '../../assets/images/TestimonyImg-1.png'
import video2 from '../../assets/images/TestimonyImg-2.png'
import video3 from '../../assets/images/TestimonyImg-3.png'
import avatar1 from '../../assets/images/Avatar-1.png'
import avatar2 from '../../assets/images/Avatar-2.png'
import avatar3 from '../../assets/images/Avatar-3.png'

const VideoTestimony = () => {
    return (
        <div className="bg-secondary my-20">
            {/* testimony container */}
            <div className="max-w-7xl mx-auto py-12">
                {/* testimony text */}
                <div className="flex flex-col items-center justify-center text-center mx-auto space-y-5 max-w-[550px] p-2">
                    <span className="bg-white text-black text-xs uppercase rounded-full w-fit px-3 py-2 text-center">Video Testimonials</span>
                    <h2 className="text-4xl font-bold">Let’s see what our students say</h2>
                    <p className="text-ash">Lorem ipsum dolor sit amet  Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus. Velit lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut vitae ultricies. T</p>
                </div>

                {/* testimony cards */}
                <div className="flex flex-col md:flex-row gap-6 my-12">
                    <VideoCard img={video1} review={'Lorem ipsum dolor sit amet consectetur. Lectus leo sed phasellus orci. Quam tortor facilisis eu pharetra risus ut viverra ultricies duis. Fermentum purus tellus nunc tortor tempus nulla. At purus vel elit eu.'} profileImg={avatar1} />

                    <VideoCard img={video2} review={'Lorem ipsum dolor sit amet consectetur. Lectus leo sed phasellus orci. Quam tortor facilisis eu pharetra risus ut viverra ultricies duis. Fermentum purus tellus nunc tortor tempus nulla. At purus vel elit eu.'} profileImg={avatar2} />

                    <VideoCard img={video3} review={'Lorem ipsum dolor sit amet consectetur. Lectus leo sed phasellus orci. Quam tortor facilisis eu pharetra risus ut viverra ultricies duis. Fermentum purus tellus nunc tortor tempus nulla. At purus vel elit eu.'} profileImg={avatar3} />
                </div>

                <div className="text-center">
                    <button className="border px-5 py-3 rounded-full">Load More</button>
                </div>
            </div>
        </div>
    );
};

export default VideoTestimony;