import React from 'react';

import './styles/contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <h2> Say HI!</h2>
      <div className="contact__block">
        <div className="container">
          <div className="contact__Icons">
            <i> Icon </i>
            <i> Icon </i>
            <i> Icon </i>
          </div>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Type your message here..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
