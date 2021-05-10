import Backnavlink from './Backnavlink';

const Case1 = () => {
  return (
    <>
      <Backnavlink title="Work" />
      <section id="case-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Click, there it is!</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            UX design and conceptual UI Design for logistics company
          </p>
          <div className="about-case">
            <div>
              <i class="fas fa-flag"></i>
              <h3>Assignment</h3>
              UX Design for multiple processes, and conceptual UI design for
              logistics company.
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
                <li>UX Design</li>
                <li>Conceptual UI Design</li>
              </ul>
            </div>
            <div>
              <i class="fas fa-tools"></i>
              <h3>Skills and tools used</h3>
              <ul>
                <li>UI design</li>
                <li>Material Design</li>
                <li>Design Libraries</li>
                <li>Conceptualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="case-b">
        <div className="container">
          <div className="img-frame">
            <img src="../img/items/case1-1.jpg" alt="" className="case-image" />
            <p>Erb Erban Arban</p>
          </div>
          <img src="../img/items/case1-2.jpg" alt="" className="case-image" />

          <img src="../img/items/case1-3.jpg" alt="" className="case-image" />
        </div>
      </section>
    </>
  );
};

export default Case1;
