
const BannerCard = ({icon, title, desc}) => {
    return (
        <div className="flex flex-col items-center justify-center bg-secondary rounded-2xl px-4 py-6">
            <img src={icon} alt="banner-icon" className="mb-4"/>
            <p className="font-bold text-xl mb-2">{title}</p>
            <p className="text-ash">{desc}</p>
        </div>
    );
};

export default BannerCard;