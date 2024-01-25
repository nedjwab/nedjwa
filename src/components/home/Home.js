import React from 'react';
import Typewriter from 'typewriter-effect';
import Navbar from '../navbar/Navbar';
import { HashLink as Link } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 1700,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});

const Home = () => (
  <>
  <section className='flex flex-col md:lg:h-128 md:lg:font-Dancing' id="Home">
    <Navbar />
    <div className="mt-0 md:lg:mt-10 text-center container flex flex-col justify-items-center items-center Popins  h-5/6">
      <div className="md:lg:ml-2">
        <p data-aos="fade-right" className="text-para text-2xl md:lg:text-5xl ">
          Hello there,
          This is
          {' '}
          {'\n'}
          <span className="text-span text-2xl md:lg:text-5xl mb-11 "> Nedjwa.</span>
        </p>
        <div className="h-8 mt-7 mb-9 font-Dancing">
          <Typewriter className="text-5xl"
            onInit={(typewriter) => {
              typewriter
                .typeString('<span style="color: #B9848C">UI/UX Designer </span>')
                .pauseFor(10)
                .deleteAll()
                .typeString('<span style="color:#B9848C">Full-Stack web developper </span>')
                .start();
            }}
          />
        </div>
        <p data-aos="zoom-in" className="text-para text-xl md:lg:text-3xl font-light leading-8 md:lg:leading-10 mt-13 xl:mt-20 mb-16 font-Dancing">
          I&apos;m a
          {' '}
          <span className="text-span">computer scientist</span>
          {' '}
          based in
          {' '}
          <span className="text-span">Algeria</span>
          ,fulled by
          instant coffee and driven by passsion.
          <br />
          I love building
          {' '}
          <span className="text-span">interactive,</span>
          digital experiences on the web.
          <br />
          I can help you build a product , feature or website.
        </p>
      <Link to="#About">       
       <div class='scrolldown cursor-pointer' data-aos="fade-right"> 
        <div class="chevrons">
          <div class='chevrondown'></div>
          <div class='chevrondown'></div>
        </div>
      </div>
      </Link>
      </div>
    </div>
 
  </section>
  
  </>
);


export default Home
