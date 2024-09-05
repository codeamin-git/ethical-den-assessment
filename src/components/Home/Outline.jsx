import OutlineCard from "../Outline/OutlineCard";
import outline1 from '../../assets/icons/outline-1.png'
import outline2 from '../../assets/icons/outline-2.png'
import outline3 from '../../assets/icons/outline-3.png'

const Outline = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {/* outline container */}
            <div className="max-w-5xl mx-auto">
                <div className="text-center space-y-5">
                    <h2 className="text-4xl font-bold">Lorem Ipsum</h2>
                    <p className="text-ash max-w-[840px] mx-auto">Lorem ipsum dolor sit amet  Amet sed elementum eget volutpat lectus dui sed. Sed risus dictumst faucibus vitae iaculis enim dui vitae. Sollicitudin consequat nibh nunc adipiscing laoreet faucibus. Velit lacinia etiam sed nisi at quam venenatis. Amet facilisi fusce non urna. Sed dolor dolor ut vitae ultricies. T</p>

                    {/* outline cards */}
                    <div className="flex items-center flex-col md:flex-row justify-between py-4 gap-6">
                        <OutlineCard title={"Week 1"} icon={outline1} heading={"Lorem ipsum"} desc={"Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. "}/>

                        <OutlineCard title={"Week 2"} icon={outline2} heading={"Lorem ipsum"} desc={"Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. "}/>

                        <OutlineCard title={"Week 3"} icon={outline3} heading={"Lorem ipsum"} desc={"Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. Tincidunt odio cursus eleifend fermentum. Non nisl mattis  Ipsum donec tortor laoreet euismod phasellus. "}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Outline;