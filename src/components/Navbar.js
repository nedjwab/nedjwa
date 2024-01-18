import React from 'react';
import logo from './logo.png';
import './navbar.css';


const Navbar = () => {
  return (
    <section> 
    <div className="text-blu flex flex-row justify-between cursor-pointer space-x-1" data-aos="fade-down">
        <div className='img-container w-28 ml-3'>
        <img src = {logo} alt="logo" className='w-32'></img>
        </div>
        <div className ='nav-container text-para font-Roboto font-medium list-none flex flex-row justify-end gap-14 text-lg p-12'>
          <p className='nav-element'>About</p>
          <p className='nav-element'>Projects</p>
          <p className='nav-element'>Contact</p>
        </div>
    </div>
    </section>
  )
}
export default Navbar 