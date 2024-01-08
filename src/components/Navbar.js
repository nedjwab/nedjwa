import React from 'react';
import logo from './logo.png';
import './navbar.css';
import  './About.css'

const Navbar = () => {
  return (
    <section> 
    <div className="text-blu flex flex-row justify-between cursor-pointer space-x-1" data-aos="fade-down">
        <img src = {logo} alt="logo" className='w-40'></img>
        <div className ='text-para font-Roboto font-medium list-none flex flex-row justify-end gap-14 text-lg p-14'>
          <a>About</a>
          <a>Projects</a>
          <a>Contact</a>
        </div>
    </div>
    </section>
  )
}
export default Navbar 