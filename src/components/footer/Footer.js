import React from 'react';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';


const Footer = () => (
  <div>
    <aside className="sidebar ml-9 flex flex-row xl:hidden" aria-label="Sidebar">
      <div className="rounded text-2xl">
        <ul className="space-y-2 flex flex-row xl:block">
          <li>
            <a href="https://www.linkedin.com/in/nedjwa-bouraiou/" className="flex items-center p-2 text-3xl font-normal text-gray-900 rounded-lg dark:text-white mb-1 mt-2 ">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ned_jwa" className="flex  p-2 text-3xl font-normal text-gray-900 rounded-lg dark:text-white">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/nedjwab" className="flex items-center p-2 text-3xl font-normal text-gray-900 rounded-lg dark:text-white">
              <BsGithub />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
);

export default Footer;