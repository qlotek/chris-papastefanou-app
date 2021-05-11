import Backnavlink from './Backnavlink';

const Case9 = () => {
  return (
    <>
      <Backnavlink title="Work" />

      <section id="case-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Place your bets...</h2>
          <div className="bottom-line"></div>
          <p className="lead">Conceptual design, User Research</p>

          <div className="about-case">
            <div>
              <i class="fas fa-flag"></i>
              <h3>Assignment</h3>
              Design interface concept for roulette game. Spread knowledge about
              roulette within dev team.
            </div>

            <div>
              <i class="fas fa-user-alt"></i>
              <h3>Role</h3>
              UX Designer and Creative Lead
            </div>
            <div>
              <i class="fas fa-pen-nib"></i>
              <h3>Contribution and process</h3>

              <ul>
                <li>
                  Acquired a full-size roulette table for the office to
                  understand the game, prototype and set a proper context.
                </li>
                <li>
                  Arranged an in-house game night with a professional dealer,
                  giving the team first hand experience of what it’s like being
                  a player.
                </li>
                <li>Created conceptual design</li>
              </ul>
            </div>
            <div>
              <i class="fas fa-tools"></i>
              <h3>Skills and tools used</h3>

              <ul>
                <li>Prototyping</li>
                <li>User Research</li>
                <li>Design Thinking</li>
                <li>Design Leadership</li>
                <li>Power Lifting (That table was massive.)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="case-b">
        <div className="container">
          <div className="cols cols-two">
            <div className="img-frame">
              <video width="100%" height="auto" controls>
                <source src="../video/case9-1.mp4" type="video/mp4" />
              </video>
              A lesson in roulette
            </div>
            <div className="img-frame">
              <video width="100%" height="auto" controls>
                <source src="../video/case9-2.mp4" type="video/mp4" />
              </video>
              Conceptual dolly cam shout
            </div>
          </div>
          <div className="cols cols-two">
            <div className="img-frame">
              <img
                src="../img/items/case9-3.jpg"
                alt=""
                className="case-image"
              />
              Physical UI prototyping
            </div>
            <div className="img-frame">
              <img
                src="../img/items/case9-4.jpg"
                alt=""
                className="case-image"
              />
              Final product not available due to client confidentiality
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Case9;
