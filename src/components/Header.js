const Header = (props) => {
  return (
    <header id="header-inner">
      <div className="container">
        <nav id="main-nav">
          <img src="img/logo.png" alt="My Portfolio" id="logo" />
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="work.html" class="current">
                Work
              </a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
