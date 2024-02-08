import { useState } from "react";

const Hamburger = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className=" flex items-center justify-between border-gray-400 py-8">
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
                className="h-8 w-8 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
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
        background: white;
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
      };
      `}</style>
    </div>
  );
}

export default Hamburger;
