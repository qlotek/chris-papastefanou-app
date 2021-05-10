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
            Photography as well as creating digital masterpieces and UI/UX
            layouts for websites and mobile applications
          </p>
          <div className="specials">
            <div>
              <i className="fas fa-mobile-alt fa-2x"></i>
              <h3>User Experience</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i className="fas fa-code fa-2x"></i>
              <h3>Frontend Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i className="fas fa-lightbulb fa-2x"></i>
              <h3>Strategy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i className="fas fa-thumbs-up fa-2x"></i>
              <h3>Awesomeness</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
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
