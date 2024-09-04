import { HiArrowLongRight } from "react-icons/hi2";

const Button = ({btnText}) => {
    return (
        <div>
            <button className='flex items-center gap-2 bg-primary text-black rounded-full px-4 py-2 font-bold hover:bg-opacity-80'>{btnText} <HiArrowLongRight className='text-2xl'/></button>
        </div>
    );
};

export default Button;