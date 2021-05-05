import React from 'react';

const home = () => {
  return (
    <>
      Borban
      {/* Section A: Specialize */}
      <section id="home-a" class="text-center py-2">
        <div class="container">
          <h2 class="section-title">I Specialize In</h2>
          <div class="bottom-line"></div>
          <p class="lead">
            Photography as well as creating digital masterpieces and UI/UX
            layouts for websites and mobile applications
          </p>
          <div class="specials">
            <div>
              <i class="fas fa-file-alt fa-2x"></i>
              <h3>Concepting</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i class="fas fa-desktop fa-2x"></i>
              <h3>UI/UX</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i class="fas fa-object-ungroup fa-2x"></i>
              <h3>Visual Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i class="fas fa-thumbs-up fa-2x"></i>
              <h3>Interaction</h3>
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
      <section id="home-b" class="text-center py-2">
        <div class="stats">
          <div>
            <ul>
              <li>
                <i class="fas fa-users fa-3x"></i>
              </li>
              <li class="stats-title">Clients</li>
              <li class="stats-number">100</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i class="fas fa-award fa-3x"></i>
              </li>
              <li class="stats-title">Awards</li>
              <li class="stats-number">3</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i class="fas fa-hourglass-start fa-3x"></i>
              </li>
              <li class="stats-title">Hours Worked</li>
              <li class="stats-number">3500</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i class="fas fa-code-branch fa-3x"></i>
              </li>
              <li class="stats-title">Projects Completed</li>
              <li class="stats-number">135</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section C: Process */}
      <section id="home-c" class="text-center py-2">
        <div class="container">
          <h2 class="section-title">My Creative Process</h2>
          <div class="bottom-line"></div>
          <p class="lead">
            All of my UI/UX and design projects are based off of a practiced
            formula to get the result that I am looking for
          </p>
          <div class="process">
            <div>
              <i class="fas fa-file-alt fa-4x process-icon my-2">
                <div class="process-step">1</div>
              </i>
              <h3>Discuss The Project</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
            <div>
              <i class="fas fa-desktop fa-4x process-icon my-2">
                <div class="process-step">2</div>
              </i>
              <h3>Brainstorming ^ Concept</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
            <div>
              <i class="fas fa-object-ungroup fa-4x process-icon my-2">
                <div class="process-step">3</div>
              </i>
              <h3>UI/UX Planning</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
            <div>
              <i class="fas fa-thumbs-up fa-4x process-icon my-2">
                <div class="process-step">4</div>
              </i>
              <h3>Interaction</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
