import { PiPhoneCall } from 'react-icons/pi';
import laptop from '../../assets/images/laptop.png'

const Process = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between py-20">
            <img src={laptop} alt="laptop" />

            <div className='max-w-[550px] flex flex-col items-start'>
                <h1 className="text-4xl font-bold">Lorem ipsum amet consectetur. Mauris diam.</h1>

                <p className="text-ash mt-5">Lorem ipsum dolor sit amet consectetur. Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus. Velit lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut</p>

                <div>
                    <button className="bg-primary text-black px-5 py-3 rounded-full hover:bg-opacity-80 font-bold flex gap-1 mx-auto mt-10">
                        <PiPhoneCall className="text-2xl" />
                        Book A Call
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Process;