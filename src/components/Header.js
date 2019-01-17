import React from 'react';
import './styles/header.scss';

import { ICONS } from '../constant';

import Icon from './Icon';

const Header = () => {
  const iconColor = '#dcf2f0';

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="">
              <Icon
                icon={ICONS.BUBBLE}
                width={56}
                height={32}
                color={iconColor}
              />
            </a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="intro">
        <div className="container">
          <div className="intro-headings">
            <h1>Wallace Crawford</h1>
            <h4>Professional Photographer</h4>
          </div>

          <a href="#" className="continue-btn" data-scroll-target=".about">
            Continue
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
