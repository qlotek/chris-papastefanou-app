import Backnavlink from './Backnavlink';

const Case4 = () => {
  return (
    <>
      <Backnavlink title="Work" />

      <section id="case-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">How are we doing on time?</h2>
          <div className="bottom-line"></div>
          <p className="lead">Frontend Development + UX/UI Design</p>
          <div className="about-case">
            <div>
              <i class="fas fa-flag"></i>
              <h3>Assignment</h3>
              Create a online app that shows the cost of a meeting in real time.
            </div>

            <div>
              <i class="fas fa-user-alt"></i>
              <h3>Role</h3>
              Sole creator and producer
            </div>
            <div>
              <i class="fas fa-pen-nib"></i>
              <h3>Contribution and process</h3>

              <ul>
                <li>Ideation</li>
                <li>UX Design</li>
                <li>Frontend development</li>
              </ul>
            </div>
            <div>
              <i class="fas fa-tools"></i>
              <h3>Skills and tools used</h3>

              <ul>
                <li>Prototyping</li>
                <li>UI Design</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>
          <img src="../img/items/case4-1.png" alt="" className="case-image" />
        </div>
      </section>
    </>
  );
};

export default Case4;
