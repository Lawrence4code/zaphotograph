import React from 'react';

import Icon from './Icon';
import { ICONS } from '../constant';
import './styles/contact.scss';

const Contact = () => {
  const iconColor = '#9c9c9c';
  return (
    <div className="contact">
      <h2 className="contact__heading container"> Say HI!</h2>
      <div className="contact__block">
        <div className="container">
          <div className="contact__icons">
            <div className="contact__icon">
              <Icon
                icon={ICONS.ADDRESS}
                width={56}
                height={32}
                color={iconColor}
              />
              <h3> Address </h3>
              <p>2568 Northaven Rd, sunset boulevard, 90121, USA</p>
            </div>
            <div className="contact__icon">
              <Icon
                icon={ICONS.MOBILE}
                width={56}
                height={32}
                color={iconColor}
              />
              <h3> Phone </h3>
              <p>(269)-973-7772</p>
            </div>
            <div className="contact__icon">
              <Icon
                icon={ICONS.EMAIL}
                width={56}
                height={32}
                color={iconColor}
              />
              <h3> Email </h3>
              <p>wallace.crawford@zaphotograph.com</p>
            </div>
          </div>
          <form>
            <div className="inputs">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Type your message here..."
            />
            <button> send </button>
          </form>
        </div>
        <footer>
          <p className="copyright"> Wallace Crawford. All Right Reserved.</p>
          <div className="footer__icons">
            <Icon icon={ICONS.TWITTER} />
            <Icon icon={ICONS.FACEBOOK} />
            <Icon icon={ICONS.INSTAGRAM} />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
