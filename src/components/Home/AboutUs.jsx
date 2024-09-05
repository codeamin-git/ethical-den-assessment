import img1 from '../../assets/images/AboutUs-1.png'
import img2 from '../../assets/images/AboutUs-2.png'
import img3 from '../../assets/images/AboutUs-3.png'
import img4 from '../../assets/images/AboutUs-4.png'
import AboutUsText from '../AboutUs/AboutUsText';

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-20">
            {/* first section */}
            <div className='flex items-center justify-between flex-col lg:flex-row'>
                <div className='flex flex-col md:flex-row gap-6 mb-4'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" className='h-2/3 my-auto'/>
                </div>
                <AboutUsText title={'about us'} heading={'Who we are'} desc={'Lorem ipsum dolor sit amet  Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus. Velit lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut vitae ultricies. Tortor ligula enim eros maecenas. Magna eget porttitor augue eu enim. Iaculis luctus magna tellus ullamcorper dui nisl viverra at. Ac amet lorem vel enim fames imperdiet varius. Semper'}/>
            </div>

            {/* second section */}
            <div className='flex items-center justify-between flex-col lg:flex-row'>
                <AboutUsText title={'about us'} heading={'Here is how we Help people'} desc={'Lorem ipsum dolor sit amet  Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus. Velit lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut vitae ultricies. Tortor ligula enim eros maecenas. Magna eget porttitor augue eu enim. Iaculis luctus magna tellus ullamcorper dui nisl viverra at. Ac amet lorem vel enim fames imperdiet varius. Semper'}/>

                <div className='flex flex-col md:flex-row gap-6 mb-4'>
                    <img src={img3} alt="" className='h-2/3 my-auto'/>
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;