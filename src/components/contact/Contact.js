import React from 'react';
import "./Contact.css";
import { VscSend } from "react-icons/vsc";
import { PiArrowBendDownRightLight } from "react-icons/pi";
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xu48twt','template_bsoxbk3', e.target,'DvK5mrzkKutuIxbbY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section className="mt-10 relative " id="Contact">
      <div className="st-section-heading st-style1">
        <h4 className="st-section-heading-title" data-aos="fade-down">CONTACT</h4>
        <h2 className="st-section-heading-subtitle">CONTACT</h2>
      </div>
      <div className="flex flex-row gap-28 justify-center ">
      <blockquote className="text-xl leading-relaxed italic font-Bodoni mt-14 tracking-wide w-1/4 text-para " data-aos="fade-right">
      <p>"In the symphony of ideas, let's compose together! Whether the canvas of collaboration beckons, a project awaits its muse.feel the freedom to reach out.".</p>
      <PiArrowBendDownRightLight className='text-span text-8xl mx-72 my-11'/>
      </blockquote>
      <div className="background" data-aos="fade-left">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div className="app-contact">CONTACT INFO : +666766773</div>
              </div>
              <form onSubmit={sendEmail}>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" name="name" type="text" placeholder="NAME"/>
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" name="email" type="email" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MESSAGE"
                      id="message"
                      name="message"
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button font-Bodoni flex flex-row  items-center">
                    <VscSend className='mr-2'/>
                    Send
                    </button>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="credits font-Bodoni bg-blu bg-opacity-5 font-Bodoni">
            @2024-Nedjwa | All right reserved ✨
      </div>
    </section>
  );
};

export default Contact;
