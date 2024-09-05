import { GoStar } from "react-icons/go";

const VideoCard = ({ img, review, profileImg }) => {
    return (
        <div className="bg-black p-4 flex flex-col space-y-4 rounded-2xl">
            <img src={img} alt="video" />
            <p>{review}</p>
            <p className="flex gap-2">
                <GoStar className="text-primary" /><GoStar className="text-primary" /><GoStar className="text-primary" /><GoStar className="text-primary" /><GoStar className="text-primary" />
            </p>
            <div className="flex gap-4">
                <img src={profileImg} alt="profile-image" />
                <p className="flex flex-col gap-2 items-start">
                    <span className="font-bold text-xl">Nathan Drake</span>
                    <span className="text-ash">Founder of something</span>
                </p>
            </div>
        </div>
    );
};

export default VideoCard;