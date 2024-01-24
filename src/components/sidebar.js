import React from 'react';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import '../App.css'

const Sidebar = () => (
  <div>
    <aside className="mt-96 ml-9 hidden z-20 xl:block fixed" aria-label="Sidebar" data-aos="zoom-in">
      <div className="line mt-5 ml-5 mb-9" />
      <div className="rounded text-2xl">
        <ul className="text-para space-y-2 flex flex-row xl:block">
        <li>
        <a href="https://www.linkedin.com/in/nedjwa-bouraiou/" className="flex items-center p-2 text-2xl font-normal text-gray-900 rounded-lg mb-1 sidebar-icon">
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/ned_jwa" className="flex p-2 text-2xl font-normal text-gray-900 rounded-lg  sidebar-icon">
          <BsTwitter />
        </a>
      </li>
      <li>
        <a href="https://github.com/nedjwab" className="flex items-center p-2 text-2xl font-normal text-gray-900 rounded-lg  sidebar-icon">
          <BsGithub />
        </a>
      </li>
      </ul>
      </div>
    </aside>
  </div>
);

export default Sidebar;

