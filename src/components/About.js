import React from 'react';

const About = () => {
  return (
    <>
      {/* Section A: Info */}
      <section id="about-a" class="text-center py-3">
        <div class="container">
          <h2 class="section-title">About Me</h2>
          <div class="bottom-line"></div>
          <p class="lead">
            Let me tell you a little about myself and what I do...
          </p>
          <div class="about-info">
            <img src="img/about.jpg" alt="" class="bio-image" />
            <div class="bio bg-light">
              <h4>Your Project Is In Safe Hands</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
                nesciunt unde nihil voluptatum commodi consequuntur molestiae?
                Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
                deserunt!
              </p>
            </div>

            <div class="award-2">
              <i class="fas fa-award fa-3x"></i>
              <h3>Award Two</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, magni!
              </p>
            </div>
            <div class="award-3">
              <i class="fas fa-award fa-3x"></i>
              <h3>Award Three</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, magni!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Progress Bars */}
      <section id="about-b" class="bg-dark py-3">
        <div class="container">
          <h2 class="section-title">Technical Skills</h2>
          <div class="bottom-line"></div>
          <h4>HTML:</h4>
          <div class="progress">
            <div style={{ width: 90 + '%' }}></div>
          </div>
          <h4>CSS:</h4>
          <div class="progress">
            <div style={{ width: 90 + '%' }}></div>
          </div>
          <h4>Javascript:</h4>
          <div class="progress">
            <div style={{ width: 50 + '%' }}></div>
          </div>
          <h4>React:</h4>
          <div class="progress">
            <div style={{ width: 10 + '%' }}></div>
          </div>
          <h4>Wordpress:</h4>
          <div class="progress">
            <div style={{ width: 80 + '%' }}></div>
          </div>
          <h4>Magento:</h4>
          <div class="progress">
            <div style={{ width: 70 + '%' }}></div>
          </div>
        </div>
      </section>

      {/* Section C: Logos  */}
      <section id="about-c" class="py-4 bg-light">
        <div class="container">
          <div class="about-logos">
            <img src="img/about-logos/logo-envato.png" alt="" />
            <img src="img/about-logos/logo-wordpress.png" alt="" />
            <img src="img/about-logos/logo-woocommerce.png" alt="" />
            <img src="img/about-logos/logo-magento.png" alt="" />
          </div>
        </div>
      </section>

      {/* Section D: Testimonials */}
      <section id="about-d" class="py-4">
        <div class="container">
          <h2 class="section-title">Testimonials</h2>
          <div class="bottom-line"></div>
          <p class="lead text-center">Take a look at what my clients say...</p>
          <div class="testimonials">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                sint? Non, fugit!
              </p>
              <ul>
                <li>
                  <img src="img/testimonials//person1.jpg" alt="" />
                </li>
                <li>Sam Smith, New York</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                sint? Non, fugit!
              </p>
              <ul>
                <li>
                  <img src="img/testimonials//person2.jpg" alt="" />
                </li>
                <li>Sara Williams, Michigan</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                sint? Non, fugit!
              </p>
              <ul>
                <li>
                  <img src="img/testimonials//person3.jpg" alt="" />
                </li>
                <li>Jill Johnson, London</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates officiis quia nostrum nam ab vel laudantium, ea,
                corrupti culpa illum soluta ipsam eos, eius ad error voluptate
                sint? Non, fugit!
              </p>
              <ul>
                <li>
                  <img src="img/testimonials//person4.jpg" alt="" />
                </li>
                <li>Steve Thompson, Boston</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
