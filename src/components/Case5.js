import Backnavlink from './Backnavlink';

const Case5 = () => {
  return (
    <>
      <Backnavlink title="Work" />

      <section id="case-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">Guess what happens next?</h2>
          <div className="bottom-line"></div>
          <p className="lead">Video production for promotional video</p>
          <div className="about-case">
            <div>
              <i class="fas fa-flag"></i>
              <h3>Assignment</h3>
              Create video to promote and explain a Predictive Technology
              Product. Within a week and on a minuscule budget…
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
                <li>
                  Worked with stake holders to create three realistic
                  applications of the technology, on which to base the story
                </li>
                <li>Created the product name “Proofecy”</li>
                <li>Created storyboard and script</li>
                <li>Acquired stock video and edited</li>
                <li>
                  Recorded the voice (
                  <a href="https://papastefanou.com">
                    because voice acting is my side gig
                  </a>
                  )
                </li>
              </ul>
            </div>
            <div>
              <i class="fas fa-tools"></i>
              <h3>Skills and tools used</h3>

              <ul>
                <li>Product marketing</li>
                <li>Storytelling</li>
                <li>Copywriting</li>
                <li>Storyboarding</li>
                <li>Voice acting</li>
                <li>Video editing/Final Cut Pro</li>
              </ul>
            </div>
          </div>
          <iframe
            title="Promo video"
            width="840"
            height="473"
            src="https://www.youtube.com/embed/TsiZknioh70"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Case5;
