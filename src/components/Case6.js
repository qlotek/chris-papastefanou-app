import Backnavlink from './Backnavlink';

const Case6 = (props) => {
  return (
    <>
      <Backnavlink title="Work" />

      <section id="case-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Step right up ladies and gentlemen</h2>
          <div className="bottom-line"></div>
          <p className="lead">Visual Design</p>
          <div className="about-case">
            <div>
              <i class="fas fa-flag"></i>
              <h3>Assignment</h3>
              Create theme and design branding material for exhibitions.
            </div>

            <div>
              <i class="fas fa-user-alt"></i>
              <h3>Role</h3>
              UX/Brand Designer
            </div>
            <div>
              <i class="fas fa-pen-nib"></i>
              <h3>Contribution and process</h3>

              <ul>
                <li>Ideation for Theme</li>
                <li>
                  Design of:
                  <ul>
                    <li>Clothing</li>
                    <li>Exhibition Stand</li>
                    <li>Digital and Printed Matter</li>
                  </ul>
                </li>
                <li></li>
              </ul>
            </div>
            <div>
              <i class="fas fa-tools"></i>
              <h3>Skills and tools used</h3>

              <ul>
                <li>Design Leadership</li>
                <li>Visual Design</li>
              </ul>
            </div>
          </div>
          <img src="../img/items/case6-1.png" alt="" className="case-image" />
          <img src="../img/items/case6-2.jpg" alt="" className="case-image" />
          <img src="../img/items/case6-3.jpg" alt="" className="case-image" />
          <img src="../img/items/case6-4.jpg" alt="" className="case-image" />
          <img src="../img/items/case6-5.jpg" alt="" className="case-image" />
        </div>
      </section>
    </>
  );
};

export default Case6;
