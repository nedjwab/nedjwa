import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from './logo.png';
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section>
      <div className="text-blu flex flex-row items-center justify-between cursor-pointer" data-aos="fade-down">
        <div className='img-container w-36'>
          <Link to="#Home"><img src={logo} alt="logo" className=''></img></Link>
        </div>

        <div className='lg:hidden'>
          <button
            className="text-para"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>

        <div className={`nav-container text-para font-Roboto font-medium list-none flex flex-row justify-end gap-14 text-lg p-14 ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
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
