import React from 'react';
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';
import ParticlesBackground from './ParticlesBackground';
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
  <section className='flex flex-col h-128 mt-0' id="Home">
    <Navbar />
    <div className="mt-10 text-center container flex flex-col justify-items-center items-center font-Dancing  h-5/6">
      <div className="ml-2">
        <p data-aos="fade-right" className="text-para text-5xl ">
          Hello there,
          This is
          {' '}
          {'\n'}
          <span className="text-span text-5xl mb-11 "> Nedjwa.</span>
        </p>
        <div className="h-8 mt-7 mb-9">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('<span style="color: #B9848C;;font-size:30px;">UI/UX Designer </span>')
                .pauseFor(10)
                .deleteAll()
                .typeString('<span style="color:#B9848C;;font-size:30px;">Full-Stack web developper </span>')
                .start();
            }}
          />
        </div>
        <p data-aos="zoom-in" className="text-para text-3xl font-light leading-10 mt-13 xl:mt-20 mb-16">
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
        <div class='scrolldown cursor-pointer' data-aos="fade-right">
        <div class="chevrons">
          <div class='chevrondown'></div>
          <div class='chevrondown'></div>
        </div>
      </div>
      </div>
    </div>
    <ParticlesBackground />
  </section>
  
  </>
);


export default Home
