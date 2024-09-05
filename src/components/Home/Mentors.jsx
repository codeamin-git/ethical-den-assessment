import mentor1 from '../../assets/images/mentor-1.png'
import mentor2 from '../../assets/images/mentor-2.png'
import mentor3 from '../../assets/images/mentor-3.png'
import mentor4 from '../../assets/images/mentor-4.png'
import mentor5 from '../../assets/images/mentor-5.png'
import linkedin from '../../assets/icons/linked-in.png'
import fb from '../../assets/icons/facebook.png'
import applepods from '../../assets/icons/apple-pods.png'
import instagram from '../../assets/icons/instagram.png'
import spotify from '../../assets/icons/spotify.png'
import MentorCard from '../Mentors/MentorCard'

const Mentors = () => {
    return (
        <div className="max-w-7xl mx-auto py-20">
            {/* mentors container */}
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
                {/* 2 column card */}
                <div className='bg-white text-black p-4 rounded-xl md:col-span-2 flex flex-col'>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <img src={mentor1} alt="" />
                        <div className='flex flex-col justify-center space-y-2'>
                            <h2 className="text-3xl font-bold">Nathan Drake</h2>
                            <p className='text-ash'>Lorem ipsum dolor sit amet</p>
                            <div className='flex gap-2'>
                                <img src={linkedin} alt="linked-in" />
                                <img src={applepods} alt="apple-pods" />
                                <img src={instagram} alt="instagram" />
                                <img src={fb} alt="facebook" />
                                <img src={spotify} alt="spotify" />
                            </div>
                        </div>
                    </div>
                    <p className='mt-10'>Lorem ipsum dolor sit amet consectetur. Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis fringilla sagittis blandit nec arcu massa. Ac luctus lorem non auctor. Sagittis vehicula.Lorem ipsum dolor sit amet consectetur. Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis fringilla sagittis blandit nec arcu massa. Ac luctus lorem non auctor. </p>
                </div>

                <MentorCard img={mentor2} name={'Roland Beck'} address={'Germany'} desc={' Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis '}/>

                <MentorCard img={mentor3} name={'Roland Beck'} address={'Germany'} desc={' Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis '}/>

                <MentorCard img={mentor4} name={'Roland Beck'} address={'Germany'} desc={' Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis '}/>

                <MentorCard img={mentor5} name={'Roland Beck'} address={'Germany'} desc={' Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis '}/>
            </div>
        </div>
    );
};

export default Mentors;