import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <section className="bg-black mt-10 relative" id="Contact">
      <div className="st-section-heading st-style1">
        <h4 className="st-section-heading-title" data-aos="fade-down">CONTACT</h4>
        <h2 className="st-section-heading-subtitle">CONTACT</h2>
      </div>
      <div className="flex flex-col">
      <blockquote className="text-lg italic font-Bodoni mt-14 tracking-wide  w-2/4 mx-auto my-auto text-para" data-aos="fade-right">
      <p className='text-center'>" In the forge of experience, I sculpted a path paved with expertise and fueled by passion,
        crafting a narrative of achievement in every endeavor ".</p>
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
                <div className="app-contact">CONTACT INFO : +6667689545</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME" value="Nedjwa Bouraiou" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="CONTACT NO" />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MESSAGE"
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button mr-16">CANCEL</button>
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="credits font-Bodoni">
            @2024-Nedjwa | All right reserved ✨
          </div>
    </section>
  );
};

export default Contact;
