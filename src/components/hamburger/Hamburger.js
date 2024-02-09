import { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Footer from '../footer/Footer';

const Hamburger = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      // Prevent scrolling when the menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when the menu is closed
      document.body.style.overflow = 'visible';
    }
  }, [isNavOpen]);

  return (
    <div className="flex items-center justify-between border-gray-400 py-8">
      <nav>
        <section className="MOBILE-MENU my-2 mx-4 flex lg:hidden ">
          <div
            className="HAMBURGER-ICON space-y-1 text-para"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block bg-para h-1 w-9 animate-pulse bgh "></span>
            <span className="block bg-para h-1 w-9 animate-pulse bgh "></span>
            <span className="block bg-para h-1 w-9 animate-pulse bgh "></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 white-icon"
                viewBox="0 0 24 24"
                fill="white"
                color="white"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="div flex text-para flex-col items-center justify-around min-h-[250px]">
              <Link to="#About" className='nav-element uppercase border-b border-span-400 text-lg font-Popins' smooth>
                <span className="hover-effect">About</span>
              </Link>
              <Link to="#Projects" className='nav-element uppercase border-b border-span-400 text-lg font-Popin' smooth>
                <span className="hover-effect">Projects</span>
              </Link>
              <Link to="#Contact" className='nav-element uppercase border-b border-span-400 text-lg font-Popin'>
                <span className="hover-effect">Contact</span>
              </Link>
            </ul>
            <Footer />
          </div>

        </section>

      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      .white-icon {
        fill: white; // Change fill color to white
      }
      .bgh {
        background: linear-gradient(to left, #0c002b, #ffc2e2);
      }
      .div:after {
        
        border-top: 3px solid #ffc2e2;
        border-right: 3px solid #ffc2e2;
    }
    .div:before {
    
        border-bottom: 3px solid #ffc2e2;
        border-left: 3px solid #ffc2e2;
    }
      `}</style>
    </div>
  );
}

export default Hamburger;
