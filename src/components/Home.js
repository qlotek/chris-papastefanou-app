import React from 'react';

const home = () => {
  return (
    <>
      {/* Section A: Specialize */}
      <section id="home-a" className="text-center py-2">
        <div className="container">
          <h2 className="section-title">Stuff I do well</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            Trailblazing Senior UX and Frontend Guy, with 20+ years of
            experience from all over the business, leaving a multitude of global
            clients smiling.
          </p>
          <div className="specials">
            <div>
              <i className="fas fa-mobile-alt fa-2x"></i>
              <h3>User Experience</h3>
              <p>
                I do every step of the whole UX design cycle, and all things
                related. From research and business case, to design and testing.
              </p>
            </div>
            <div>
              <i className="fas fa-code fa-2x"></i>
              <h3>Frontend Development</h3>
              <p>
                Classic frontend developer skilled in HTML, CSS and JS. In the
                process of learning React.
              </p>
            </div>
            <div>
              <i className="fas fa-lightbulb fa-2x"></i>
              <h3>Strategy</h3>
              <p>
                experienced in Business Analysis and Product Development, I will
                help you find ideas and processes that are realistic,
                sustainable and that can respond to change.
              </p>
            </div>
            <div>
              <i className="fas fa-thumbs-up fa-2x"></i>
              <h3>Awesomeness</h3>
              <p>
                Apart form being an super nice guy, I'm a pretty awesome
                communicatior, presenter and speaker.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section B: Stats */}
      {/* <section id="home-b" className="text-center py-2">
        <div className="stats">
          <div>
            <ul>
              <li>
                <i className="fas fa-users fa-3x"></i>
              </li>
              <li className="stats-title">Clients</li>
              <li className="stats-number">100</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-award fa-3x"></i>
              </li>
              <li className="stats-title">Awards</li>
              <li className="stats-number">3</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-hourglass-start fa-3x"></i>
              </li>
              <li className="stats-title">Hours Worked</li>
              <li className="stats-number">3500</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-code-branch fa-3x"></i>
              </li>
              <li className="stats-title">Projects Completed</li>
              <li className="stats-number">135</li>
            </ul>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default home;
