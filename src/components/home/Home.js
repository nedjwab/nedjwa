import React from 'react';
import Typewriter from 'typewriter-effect';
import { HashLink as Link } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'


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
  <section className='flex flex-col lg:h-128 lg:font-Dancing' id="Home">
    
    <div className="mt-0 lg:mt-10 text-center container flex flex-col justify-items-center items-center Popins h-5/6">
      <div className="lg:ml-2">
        <p data-aos="fade-right" className="text-para text-xl lg:text-5xl ">
          Hello there,
          This is
          {' '}
          {'\n'}
          <span className="text-span text-xl lg:text-5xl mb-11 "> Nedjwa.</span>
        </p>
        <div className="h-8 mt-7 mb-4 font-Dancing">
          <Typewriter className="text-5xl"
            onInit={(typewriter) => {
              typewriter
                .typeString('<span class="typewriter">UI/UX Designer </span>')
                .pauseFor(10)
                .deleteAll()
                .typeString('<span class="typewriter">Full-Stack web developer </span>')
                .start();
            }}
          />
        </div>
        <p data-aos="zoom-in" className="mx-2 text-para text-md lg:text-3xl font-light leading-8 lg:leading-10 mt-13 xl:mt-16 mb-16 font-Dancing">
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
       <div className='scrolldown cursor-pointer' data-aos="fade-right"> 
        <div className="chevrons">
          <div className='chevrondown'></div>
          <div className='chevrondown'></div>
        </div>
      </div>
      </Link>
      </div>
    </div>
  </section>
  </>
);

export default Home;
