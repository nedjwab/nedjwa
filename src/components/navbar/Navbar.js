import { HashLink as Link } from 'react-router-hash-link';
import Hamburger from '../hamburger/Hamburger';
import logo from '../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <section>
      <div className="h-16 mt-2 md:lg:h-3/4 text-blu flex flex-row items-center justify-between cursor-pointer" data-aos="fade-down">
        <div className='img-container  w-1/4 lg:md:w-36'>
          <Link to="#Home"><img src={logo} alt="logo" className=''></img></Link>
        </div>
        <Hamburger />
        <div className="hidden md:lg:flex nav-container text-para font-Roboto font-medium list-none flex-row justify-end gap-14 text-lg p-14">
          <Link to="#About" className='nav-element' smooth>
            <span className="hover-effect">About</span>
          </Link>
          <Link to="#Projects" className='nav-element' smooth>
            <span className="hover-effect">Projects</span>
          </Link>
          <Link to="#Contact" className='nav-element'>
            <span className="hover-effect">Contact</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
