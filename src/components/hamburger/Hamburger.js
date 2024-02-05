import React, { useState } from 'react'; // import state
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import {
  AiFillHome,
} from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';
import './hamburger.css';

 const Hamburger = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between py-8 mr-7">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <button
            className="HAMBURGER-ICON space-y-2"
            type="submit"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bgh" />
            <span className="block h-0.5 w-8 animate-pulse bgh" />
            <span className="block h-0.5 w-8 animate-pulse bgh" />
          </button>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            {' '}
            <button
              className="absolute top-0 right-0 px-8 py-8"
              type="submit"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 color"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-lg div mt-96">
              <li className="my-8 uppercase flex flex-row ">
                <AiFillHome color="#B9848C" data-aos="fade-in" fill="#ffc2e2" className="mr-4 mt-1" />
                <a href="/">Home</a>
              </li>
              <li className="my-8 uppercase color flex flex-row ">
              <Link to="#About">
                <span>About</span>
              </Link>
              </li>
              <li className="my-8 uppercase color flex flex-row">
                <BsFillBriefcaseFill color="#B9848C" fill="#ffc2e2" className="ml-9 mr-4 mt-1" />
                <a href="/" className="color">Projects</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
}

export default Hamburger;