import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from './logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <section>
      <div className="text-blu flex flex-row items-center justify-between cursor-pointer" data-aos="fade-down"> {/* Adjust the space-x value as needed */}
          <div className='img-container w-36'>
            <Link to="#Home"><img src={logo} alt="logo" className=''></img> </Link>
          </div>
          <div className='nav-container text-para font-Roboto font-medium list-none flex flex-row justify-end gap-14 text-lg p-14'>
            <Link to="#About" className='nav-element' smooth>About</Link>
            <Link to="#Projects" className='nav-element' smooth>Projects</Link>
            <Link to="#Contact" className='nav-element'>Contact</Link>
          </div>
        </div>
    </section>
  );
};

export default Navbar;
