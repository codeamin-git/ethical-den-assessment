
const OutlineCard = ({title, icon, heading, desc}) => {
    return (
        <div className="bg-secondary max-w-48 space-y-5 flex flex-col items-center justify-center rounded-b-xl">
            <h3 className="bg-primary text-black font-bold w-full rounded-t-xl">{title}</h3>
            <img src={icon} alt="outline-icon" />
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className="text-ash pb-5">{desc}</p>
        </div>
    );
};

export default OutlineCard;