import Backnavlink from './Backnavlink';

const Case2 = (props) => {
  return (
    <>
      <Backnavlink title="Work" />

      <section id="case-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Look ma, no hands!</h2>
          <div className="bottom-line"></div>
          <p className="lead">Brand Communication {props.title}</p>
          <div className="about-case">
            <div>
              <i class="fas fa-flag"></i>
              <h3>Assignment</h3>
              Apply and communicate corporate brand in digital channels
            </div>

            <div>
              <i class="fas fa-user-alt"></i>
              <h3>Role</h3>
              UX Designer
            </div>
            <div>
              <i class="fas fa-pen-nib"></i>
              <h3>Contribution and process</h3>
              <ul>
                <li>Creation of catchphrases</li>
                <li>Ideation for photographs</li>
              </ul>
            </div>
            <div>
              <i class="fas fa-tools"></i>

              <h3>Skills and tools used</h3>
              <ul>
                <li>Creative direction</li>
                <li>UX Design</li>
                <li>User Research</li>
                <li>Copywriting</li>
                <li>Branding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="case-b">
        <div className="container">
          <img src="../img/items/case2-1.jpg" alt="" className="case-image" />
          <img src="../img/items/case2-2.jpg" alt="" className="case-image" />
          <img src="../img/items/case2-3.jpg" alt="" className="case-image" />
          <img src="../img/items/case2-4.jpg" alt="" className="case-image" />
          <img src="../img/items/case2-5.jpg" alt="" className="case-image" />
        </div>
      </section>
    </>
  );
};

export default Case2;
