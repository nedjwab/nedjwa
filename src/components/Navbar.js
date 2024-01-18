import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Import Link directly, no need for BrowserRouter here
import logo from './logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <section>
      <div className="text-blu flex flex-row justify-between cursor-pointer space-x-1" data-aos="fade-down">
        <div className='img-container w-28 ml-3 my-0'>
        <Link to="#Home"><img src={logo} alt="logo" className='w-36 absolute m-auto'></img> </Link>
        </div>
        <div className='nav-container text-para font-Roboto font-medium list-none flex flex-row justify-end gap-14 text-lg p-14'>
          <Link to="#About" className='nav-element' smooth>About</Link>
          <Link to="#Projects" className='nav-element' smooth>Projects</Link>
          <Link to="#Contact" className='nav-element'>Contact</Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar;
