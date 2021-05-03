import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="header-home">
        <div class="container">
          <nav id="main-nav">
            <img src="img/logo.png" alt="My Portfolio" id="logo" />
            <ul>
              <li>
                <a href="index.html" class="current">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="work.html">Work</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          <div class="header-content">
            <h1>
              Chris Papastefanou
              <span
                class="txt-type"
                data-wait="3000"
                data-words='["Photographer", "Designer", "UI/UX Dev"]'
              ></span>
            </h1>
            <p class="lead">
              User Experience | Frontend Development | Strategy | Creative
              Content Production
            </p>
            <a href="work.html" class="btn-light">
              View My Work
            </a>
          </div>
        </div>
      </header>

      <footer id="main-footer">
        <div class="footer-content container">
          <p>Copyright &copy; 2021. All Rights Reserved</p>
          <div class="social">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
