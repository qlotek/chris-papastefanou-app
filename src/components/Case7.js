import Backnavlink from './Backnavlink';

const Case7 = () => {
  return (
    <>
      <Backnavlink title="Work" />

      <section id="case-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">A twist of plot with that?</h2>
          <div className="bottom-line"></div>
          <p className="lead">Authoring</p>
          <div className="about-case">
            <div>
              <i class="fas fa-flag"></i>
              <h3>Assignment</h3>
              Write and publish a micro anthology of short stories. Because I
              can...
              <br />
              <a href="https://www.amazon.com/Pyre-Gems-Christopher-Papastefanou-ebook/dp/B08G8S453F">
                Pyre and Gems Kindle Edition
              </a>
            </div>

            <div>
              <i class="fas fa-user-alt"></i>
              <h3>Role</h3>
              Author
            </div>
            <div>
              <i class="fas fa-pen-nib"></i>
              <h3>Contribution and process</h3>

              <ul>
                <li>Writing</li>
                <li>Rewriting</li>
                <li>Rewriting</li>
                <li>Rewriting</li>
                <li>Rewriting</li>
              </ul>
            </div>
            <div>
              <i class="fas fa-tools"></i>
              <h3>Skills and tools used</h3>

              <ul>
                <li>My quirky mind</li>
              </ul>
            </div>
          </div>
          <img src="../img/items/case7-1.png" alt="" className="case-image" />
        </div>
      </section>
    </>
  );
};

export default Case7;
