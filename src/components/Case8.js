import Backnavlink from './Backnavlink';

const Case8 = () => {
  return (
    <>
      <Backnavlink title="Work" />

      <section id="case-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">How many likes did you get?</h2>
          <div className="bottom-line"></div>
          <p className="lead">Employee Engagement</p>

          <div className="about-case">
            <div>
              <h3>Assignment</h3>
              Increase employee engagement in the company's Instagram channel
            </div>

            <div>
              <h3>Role</h3>
              The guy with the crazy ideas, who's willing to execute them.
            </div>
            <div>
              <h3>Contribution and process</h3>
              <ul>
                <li>
                  Ideation: the company's Instagram on a vintage slot machine in
                  the lunch room.{' '}
                </li>
                <li>
                  Engaged hardware engineering in refurbishing the machine into
                  working condition.
                </li>
                <li>Created super simple social media guidelines</li>
                <li>Oversaw project</li>
              </ul>
            </div>
            <div>
              <h3>Skills and tools used</h3>
              <ul>
                <li>Brain storming</li>
                <li>Design sprint</li>
                <li>
                  Project Leading (Because "management" would be too big of a
                  word here)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="case-b">
        <div className="container">
          <div className="cols cols-two">
            <img src="../img/items/case8-1.png" alt="" className="case-image" />
            <img src="../img/items/case8-2.jpg" alt="" className="case-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Case8;
