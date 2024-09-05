import quotation from '../../assets/icons/double-quotation.png'

const TestimonyCard = ({ img, name, designation, desc }) => {
    return (
        <div className="bg-secondary rounded-xl p-4 text-ash">
            <div className='flex gap-2'>
                <img src={img} alt="profile-pic" />
                <div>
                    <h3 className="text-xl font-bold text-white">{name}</h3>
                    <p>{designation}</p>
                </div>
                <img src={quotation} alt="double-quotation" className='h-5'/>
            </div>
            <p>{desc}</p>
        </div>
    );
};

export default TestimonyCard;