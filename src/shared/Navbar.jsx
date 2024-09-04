import Button from '../components/common/Button';
import logo from '/logo.png'

const Navbar = () => {

    const navLinks = <>
        <span className='text-primary'>Home</span>
        <span>Case Studies</span>
        <span>Services</span>
        <span>About</span>
        <span>Reviews</span>
    </>
    return (
        <div>
            {/* navbar */}
            <div className="max-w-7xl mx-auto flex justify-between items-center py-14 px-2 md:px-10">
                {/* nav start */}
                <div className='flex gap-2 items-center'>
                    <img src={logo} alt="" className='w-5 h-5 md:w-9 md:h-9' />
                    <h1 className="text-xl md:text-3xl">DenGo</h1>
                </div>
                {/* nav end */}
                <div className='flex items-center gap-4'>
                    <div className='hidden md:flex items-center gap-4 lg:gap-12 overflow-x-auto'>
                    {navLinks}
                    </div>
                    <Button btnText={"Contact us"}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;