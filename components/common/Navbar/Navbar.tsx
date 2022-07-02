import LgNavbar from './components/LgNavbar';
import MobileNavbar from './components/MobileNavbar';

const Navbar = () => {
  return (
    <div className="w-full fixed top-0">
      <div className="w-full lg:hidden">
        <MobileNavbar />
      </div>
      <div className='w-full hidden lg:block'>
        <LgNavbar />
      </div>

    </div>
  );
};

export default Navbar;
