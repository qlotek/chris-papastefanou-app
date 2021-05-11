import Backnavlink from './Backnavlink';

const Case3 = () => {
  return (
    <>
      <Backnavlink title="Work" />

      <section id="case-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">The Umpire Strikes Back</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            UX/UI Design for Tennis Scoreboard for online betting app
          </p>
          <div className="about-case">
            <div>
              <i class="fas fa-flag"></i>
              <h3>Assignment</h3>
              Design a digital Tennis scoreboard for tennis matches including a
              schematic tennis court to follow the game, based on available
              incoming data.
            </div>

            <div>
              <i class="fas fa-user-alt"></i>
              <h3>Role</h3>
              UX/UI Designer
            </div>
            <div>
              <i class="fas fa-pen-nib"></i>
              <h3>Contribution and process</h3>
              <ul>
                <li>Lead UX Design</li>
                <li>Designed interfaces</li>
                <li>
                  Created specifications for developers and supported them in
                  development
                </li>
              </ul>
            </div>
            <div>
              <i class="fas fa-tools"></i>
              <h3>Skills and tools used</h3>
              <ul>
                <li>Design Leadership</li>
                <li>Design Thinking</li>
                <li>User Research</li>
                <li>Prototyping</li>
                <li>Frontend coding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="case-b">
        <div className="container">
          <div className="cols cols-two">
            <div className="img-frame">
              <img
                src="../img/items/case3-1.png"
                alt=""
                className="case-image"
              />
              <p>First scoreboard design draft from client</p>
            </div>
            <div className="img-frame">
              <img
                src="../img/items/case3-2.png"
                alt=""
                className="../case-image"
              />
              <p>Revised scoreboard design</p>
            </div>
          </div>
          <div className="cols cols-two">
            <div>
              <h3>Problems of first design</h3>
            </div>
            <div>
              <h3>Solutions in revised design</h3>
            </div>
          </div>

          <div className="cols cols-two">
            <div>
              Layout based on traditional scoreboards at tennis arenas. (Viewers
              are present and engaged)
            </div>
            <div>
              Layout re-thought for digital, primarily mobile. (Users may look
              casually while preoccupied with other things)
            </div>
          </div>

          <div className="cols cols-two">
            <div>“Best of five” label describes type of match.</div>
            <div>
              “Best of five” label removed, since type of match is obvious from
              the design
            </div>
          </div>

          <div className="cols cols-two">
            <div>Condensed font deviated from style guide, to save space.</div>
            <div>Styleguide font was used, as it fit in the redesign.</div>
          </div>
          <div className="cols cols-two">
            <div>
              Yellow color is used both for changing values (points etc still in
              play) and to signify winning set point.
            </div>
            <div>
              Yellow color is used for dynamic values only. White and grays is
              used for static info, including settled set points that will not
              change.
            </div>
          </div>

          <div className="cols cols-two">
            <div>
              Yellow color is used for dynamic values only. White and grays is
              used for static info, including settled set points that will not
              change.
            </div>
            <div>
              Set points don’t jump to the other side when played, but rather
              keep building a natural progression of the match. This also make
              the “previous sets” label obsolete.
            </div>
          </div>

          <div className="cols cols-one-three">
            <div>
              <img
                src="../img/items/case3-hard-a.jpg"
                alt=""
                className="case-image"
              />
            </div>
            <div>
              <img src="../img/items/case3-hard-b.jpg" alt="" className="" />
            </div>
          </div>

          <div className="cols cols-one-three">
            <div>
              <img
                src="../img/items/case3-clay-a.jpg"
                alt=""
                className="case-image"
              />
            </div>
            <div>
              <img src="../img/items/case3-clay-b.jpg" alt="" className="" />
            </div>
          </div>

          <div className="cols cols-one-three">
            <img
              src="../img/items/case3-grass-a.jpg"
              alt=""
              className="case-image"
            />

            <div>
              <img src="../img/items/case3-grass-b.jpg" alt="" className="" />
              {/*      Grass wear increases over the course of a tournament. Drag slider
              to test. */}
            </div>
          </div>

          <div className="img-frame">
            <video width="100%" height="auto" controls>
              <source src="../video/case3-1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Case3;
