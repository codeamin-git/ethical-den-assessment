import linkedin from '../../assets/icons/linked-in.png'
import fb from '../../assets/icons/facebook.png'

const MentorCard = ({img, name, address, desc}) => {
    return (
        <div className="bg-white flex flex-col items-center gap-6 rounded-xl p-5 text-black">
            <img src={img} alt="" />
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>{address}</p>
            <p>{desc}</p>
            <div className='flex gap-4'>
                <img src={linkedin} alt="linked-in" />
                <img src={fb} alt="facebook" />
            </div>
        </div>
    );
};

export default MentorCard;