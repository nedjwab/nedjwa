import {
  DiReact, DiJavascript1, DiRubyRough, DiGit, DiWordpress,
} from 'react-icons/di';
import {
  SiTailwindcss, SiReduxsaga, SiBootstrap, SiPostman, SiAdobexd, SiAdobephotoshop,
} from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import pic from './portfolio.jpg';
import { FaDownload } from "react-icons/fa6";
import "./About.css"

const About = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('cv.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'MyCv.pdf';
        alink.click();
      });
    });
  };

  return (
    <>
        <div className="md:lg:mt-14 mt-4 relative" id="About">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title" data-aos="fade-down">ABOUT</h4>
          <h2 className="st-section-heading-subtitle">ABOUT</h2>
        </div>
        <div className='flex flex-col-reverse md:lg:xl:flex-row relative md:flex-row ml-8 md:lg:xl:ml-36'>
          <div className=" w-full md:w-80 mr-0 md:mr-16 mt-14">
            <div className='img hidden md:flex xl:flex mt-16'>
            <img className="logo-pic rounded-full absolute w-1/5" data-aos="fade-right" src={pic} alt="logo" />
            </div>
            <button onClick={onButtonClick} type="submit" className='mx-auto relative top-1 md:top-50 md:left-11 flex flex-row justify-center items-center absolute  rounded-2xl md:lg:xl:rounded-full w-24 h-16 md:lg:xl:h-24 px-3 bg-blu text-para font-Dancing font-bold text-base' 
            data-aos="fade-down-right"
            style={{ boxShadow: '2px 0px 4px #94C0D0' , transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out'}}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '8px 0px 12px rgba(0, 0, 0, 0.2)';
              e.target.style.transform = 'scale(1.1)';
              e.target.style.backgroundColor = '#B9848C'; 
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '4px 0px 6px rgba(0, 0, 0, 0.1)';
              e.target.style.transform = 'scale(1)';
              e.target.style.backgroundColor = '#94C0D0';
              e.target.style.color = '#ffffff';
            }}
            >
            <FaDownload className='mr-2' />
              Resume
            </button>
          </div>
          <div className="ml-0 md:xl:lg:ml-32 w-full md:xl:lg:w-10/12">
            <blockquote className="md:lg:xl:text-4xl text-sm text-sm font-thin mt-20 mb-36 " data-aos="flip-right">
              <svg aria-hidden="true" className="text-white w-10 h-10 mb-6" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
              <h5 className="w-10/12 md:lg:xl:text-xl text-base font-Popins font-extralight leading-normal text-para text-center">
                <span className="ml-8">Nedjwa</span>
                {' '}
                bouraiou a
                {' '}
                <span className="text-span">web developper</span>
                {' '}
                and UI
                {' '}
                <span className="text-span">designer</span>
                {' '}
                from
                {' '}
                <span className="text-span">Algeria.</span>
                I am 26 years old.I hold a
                {' '}
                <span className="text-span ">master&apos;s degree </span>
                in network and distributed systems
                from the University of Constantine 2 Algeria.
                I enjoy
                {' '}
                <span className="text-span">design</span>
                {' '}
                and
                {' '}
                <span className="text-span">implement</span>
                {' '}
                websites.
                I have recently completed the microverse program,
                a remote software development school where I work with diverse
                cultures through peer programming,
                I am actively pursuing my dreams in software engineering to
                make community-building easier.
              </h5>
              <svg aria-hidden="true" className="text-white w-10 h-10 mt-11 absolute left-3/4" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
            </blockquote>
            <div className="tech-container flex flex-row justify-between md:xl:lg:mb-40">
              <div className="w-1/3" data-aos="zoom-in">
                <div className="flex flex-row">
                  <h2 className="text-base md:xl:lg:text-xl text-para font-Dancing" data-aos="zoom-in">Tech I Enjoy </h2>
                  <span role="img" aria-label="dog" className="text-xl ml-2">💻</span>
                </div>
                <hr className="hr w-8 h-1 mt-2 text-blu"/>
                <div className="flex flex-row flex-wrap text-2xl md:lg:xl:text-4xl mt-3">
                  <DiReact color="#94C0D0" fill="#94C0D0" className="mr-2 icons" />
                  <DiJavascript1 color="#ffffff" fill="#ffffff" className="mr-2 icons"  />
                  <SiTailwindcss color="#94C0D0" fill="#94C0D0" className="mr-2 icons" />
                  <SiBootstrap color="#ffffff" fill="#ffffff" className="mr-2 icons" /><br />
                  <SiReduxsaga color="#94C0D0" fill="#94C0D0" className="mr-2 icons" />
                  <DiWordpress color="#ffffff" fill="#ffffff" className="mr-2 icons" />
                  <DiRubyRough color="#94C0D0" fill="#94C0D0" className="mr-2 icons" />
                  <DiGit className="mr-2" />
                </div>
              </div>
              <div className="w-2/4 ml-8" data-aos="zoom-in-up">
                <div className="flex flex-row">
                  <h2 className="text-base md:xl:lg:text-xl text-para font-Dancing">Tools I Use </h2>
                  <span role="img" aria-label="dog" className="text-xl ml-2">🪓</span>
                </div>
                <hr className="hr w-8 h-1 mt-2 text-blu" />
                <div className="tech-container flex flex-row text-2xl md:xl:lg:text-3xl mt-4 mb-8">
                  <SiPostman color="#94C0D0" fill="#94C0D0" className="mr-4 icons" />
                  <FiFigma color="#ffffff" fill="#ffffff" className="mr-4 icons" />
                  <SiAdobexd color="#94C0D0" fill="#94C0D0" className="mr-4 icons" />
                  <SiAdobephotoshop color="#ffffff" fill="#ffffff" className="mr-4 icons" />
                </div>
            <div className='absolute left-9'>
            </div>
              </div>
            </div>
          </div>
          </div>
        </div>
 </>
  );
};

export default About;