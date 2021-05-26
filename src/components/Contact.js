import React from 'react';

const Contact = () => {
  return (
    <>
      {/* Section A: Contact Form */}
      <section id="contact-b" className="text-center py-3 contact-info">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="bottom-line"></div>
          <p className="lead">Gimme a shout</p>

          <div className="contact-info">
            <div>
              <i className="fas fa-envelope fa-2x"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:papastefanou@gmail.com">
                  papastefanou@gmail.com
                </a>
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

      {/* Section C: Tagline  */}
      {/*  <section id="contact-c" className="bg-main py-4">
        <div className="container">
          <h1>Don't be a stranger</h1>
        </div>
      </section> */}
    </>
  );
};

export default Contact;
