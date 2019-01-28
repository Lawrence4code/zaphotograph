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
            <a href="" className="header__icon">
              <Icon icon={ICONS.BUBBLE} />
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

      <div className="hero">
        <div className="hero__headings">
          <h1>Wallace Crawford</h1>
          <h4 className="hero__sub-title">
            <span> Professional </span> <span> Photographer</span>
          </h4>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#" className="scroll-down">
          <span className="scroll-btn">
            <span className="mouse">
              <span />
            </span>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
