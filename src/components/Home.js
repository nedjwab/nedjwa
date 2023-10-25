import React from 'react';
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';
import ParticlesBackground from './ParticlesBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  // Global settings:
  disable: false,
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const Home = () => (
  <>
  <section className='bg-back  flex flex-col h-128'>
    <Navbar />
    <div className="mt-16 text-center container flex flex-col justify-items-center items-center font-Dancing  h-5/6">
      <div className="ml-2">
        <p data-aos="fade-right" className="text-para text-5xl ">
          Hello there,
          This is
          {' '}
          {'\n'}
          <span className="text-span text-5xl mb-11"> Nedjwa.</span>
        </p>
        <div className="h-8 mt-7 mb-9">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('<span style="color: #A67153;;font-size:30px;">UI/UX Designer </span>')
                .pauseFor(10)
                .deleteAll()
                .typeString('<span style="color:#A67153;;font-size:30px;">Full-Stack web developper </span>')
                .start();
            }}
          />
        </div>
        <p data-aos="zoom-in" className="text-para text-3xl font-light leading-10 mt-13 xl:mt-20 mb-16">
          i&apos;m a
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
        <button className='w-28 h-28 px-3 bg-blu rounded-full text-para'  data-aos="flip-left" >
          Let's Get In Touch
        </button>
      </div>
    </div>
    <ParticlesBackground />
  </section>
  </>
);


export default Home