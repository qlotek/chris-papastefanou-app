import React from 'react';

const Connect = () => {
  return (
    <section id="resume-connect" className="text-center py-2">
      <div className="container">
        <h2>Connect</h2>
        <div className="connect">
          <div>
            <i className="fas fa-envelope fa-2x"></i>
            <h3>Email</h3>
            <p>
              <a href="mailto:papastefanou@gmail.com">papastefanou@gmail.com</a>
            </p>
          </div>
          <div>
            <i className="fas fa-phone fa-2x"></i>
            <h3>Phone</h3>
            <p>
              <a href="tel:+46704867586">+46-704 86 75 86</a>
            </p>
          </div>
          <div>
            <i className="fas fa-address-card fa-2x"></i>
            <h3>Address</h3>
            <p>
              <a href="https://goo.gl/maps/ve3gf9yYTKxxv7oZ8">
                Smealyckevägen 2B, Stråvalla, Sweden
              </a>
            </p>
          </div>

          <div>
            <i className="fab fa-linkedin-in fa-2x"></i>
            <h3>Linked In</h3>
            <p>
              <a href="linkedin.com/in/ christopherpapastefanou">
                linkedin.com/in/ christopherpapastefanou
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
