import Button from "../common/Button";

const AboutUsText = ({title, heading, desc}) => {
    return (
        <div className="flex flex-col space-y-5 max-w-[550px] p-2">
            <span className="text-ash bg-secondary text-xs uppercase rounded-full w-24 px-3 py-2 text-center">{title}</span>
            <h2 className="text-4xl font-bold">{heading}</h2>
            <p className="text-ash">{desc}</p>
            <Button btnText={"Learn More"}/>
        </div>
    );
};

export default AboutUsText;