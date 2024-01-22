import {
  DiReact, DiJavascript1, DiRubyRough, DiGit, DiWordpress,
} from 'react-icons/di';
import {
  SiTailwindcss, SiReduxsaga, SiBootstrap, SiPostman, SiAdobexd, SiAdobephotoshop,
} from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';
import pic from './portfolio.jpg';
import "./About.css"

const About = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('MyCv.pdf').then((response) => {
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
        <div className="bg-black mt-10 relative" id="About">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title" data-aos="fade-down">ABOUT</h4>
          <h2 className="st-section-heading-subtitle">ABOUT</h2>
        </div>
         <div className='flex flex-row ml-36'>
          <div className="w-80 mr-16 mt-14">
            <div className='img mt-16'>
            <img className="logo-pic rounded-full absolute w-1/5" data-aos="fade-right" src={pic} alt="logo" />
            </div>
            <button onClick={onButtonClick} type="submit" className='absolute top-2/4 left-96 w-24 h-24 px-3 bg-blu rounded-full text-para font-Dancing' data-aos="fade-down-right">
              Resume
            </button>
          </div>
          <div className="l ml-32 w-10/12">
            <blockquote className="text-4xl font-thin mt-11 mb-36 " data-aos="flip-right">
              <svg aria-hidden="true" className="text-white w-10 h-10 mb-6" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
              <h5 className="w-10/12 text-xl font-Bodoni font-thin leading-relaxed text-para">
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
              <svg aria-hidden="true" className="white w-10 h-10 mt-11 absolute left-3/4 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
            </blockquote>
            <div className="tech-container flex flex-row justify-between mb-40">
              <div className="w-1/3" data-aos="zoom-in">
                <div className="flex flex-row">
                  <h2 className="text-xl text-para" data-aos="zoom-in">Tech I Enjoy </h2>
                  <span role="img" aria-label="dog" className="text-xl ml-2">💻</span>
                </div>
                <hr className="hr w-8 h-1 mt-2 text-blu"/>
                <div className="flex flex-row flex-wrap text-4xl mt-3">
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
                  <h2 className="text-xl text-para">Tools I Use </h2>
                  <span role="img" aria-label="dog" className="text-xl ml-2">🪓</span>
                </div>
                <hr className="hr w-8 h-1 mt-2 text-blu" />
                <div className="tech-container flex flex-row text-3xl mt-4 mb-8">
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
