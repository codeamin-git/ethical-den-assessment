import TestimonyCard from "../Testimonials/TestimonyCard";
import avatar4 from '../../assets/images/Avatar-4.png'
import avatar5 from '../../assets/images/Avatar-5.png'
import avatar6 from '../../assets/images/Avatar-6.png'
import avatar7 from '../../assets/images/Avatar-7.png'
import avatar8 from '../../assets/images/Avatar-8.png'
import avatar9 from '../../assets/images/Avatar-9.png'
import { PiPhoneCall } from "react-icons/pi";


const Testimonials = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {/* testimony text */}
            <div className="flex flex-col items-center justify-center text-center mx-auto space-y-5 max-w-5xl p-2">
                    <span className="bg-secondary text-xs uppercase rounded-full w-fit px-3 py-2 text-center">Testimonials</span>
                    <h2 className="text-4xl font-bold">Let’s see what our students say</h2>
                    <p className="text-ash">Lorem ipsum dolor sit amet  Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus. Velit lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut vitae ultricies. T</p>
                </div>

            {/* testimony cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
                <TestimonyCard img={avatar4} name={"Nathan Drake"} designation={"Founder of Something"} desc={"Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. "}/>

                <TestimonyCard img={avatar5} name={"Nathan Drake"} designation={"Founder of Something"} desc={"Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. "}/>

                <TestimonyCard img={avatar6} name={"Nathan Drake"} designation={"Founder of Something"} desc={"Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. "}/>

                <TestimonyCard img={avatar7} name={"Nathan Drake"} designation={"Founder of Something"} desc={"Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. "}/>

                <TestimonyCard img={avatar8} name={"Nathan Drake"} designation={"Founder of Something"} desc={"Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. "}/>

                <TestimonyCard img={avatar9} name={"Nathan Drake"} designation={"Founder of Something"} desc={"Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. "}/>
            </div>

            <button className="bg-primary text-black px-5 py-3 rounded-full hover:bg-opacity-80 font-bold flex items-center gap-1 mx-auto mt-12">
                        <PiPhoneCall className="text-2xl" />
                        Book A Call
                    </button>
        </div>
    );
};

export default Testimonials;