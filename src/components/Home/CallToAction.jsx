import { PiPhoneCall } from 'react-icons/pi';
import meet from '../../assets/icons/meet.png'
import cta from '../../assets/images/CTA.png'

const CallToAction = () => {
    return (
        <div className="bg-secondary">
            {/* CTA container */}
            <div className="max-w-7xl mx-auto py-12 px-2 flex flex-col lg:flex-row gap-20">
                <div className='space-y-8'>
                    <img src={meet} alt="" />
                    <h1 className='text-4xl font-bold'>Ipsum amet sectetur. Mauris diam.</h1>
                    <p className='text-ash'> ipsum dolor sit amet consectetur. Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim dui vitae.
                    psum dolor sit amet consectetur. Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim dui vitae.</p>
                    <button className="bg-white text-black px-4 py-3 rounded-full hover:bg-opacity-80 font-bold flex items-center gap-1">
                        <PiPhoneCall className="text-2xl" />
                        Schedule A Call
                    </button>
                </div>

                <img src={cta} alt="CTA-banner" />
            </div>
        </div>
    );
};

export default CallToAction;