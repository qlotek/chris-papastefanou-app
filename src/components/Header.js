const Header = (props) => {
  return (
    <header id="header-home">
      <div className="container">
        <nav id="main-nav">
          <img src="img/logo.png" alt="Chris Papastefanou " id="logo" />
          <ul>
            <li>
              <a href="index.html" className="current">
                Home {props.navLocation}
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
          <h1>Chris Papastefanou</h1>
          <p class="lead">
            User Experience | Frontend Development | Strategy | Creative Content
            Production
          </p>
          <a href="work.html" class="btn-light">
            View My Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
