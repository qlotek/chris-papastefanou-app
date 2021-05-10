import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  let theHeaderId = 'header-inner';
  function determineHeaderId() {
    if (location.pathname === '/') {
      theHeaderId = 'header-home';
    }
  }
  determineHeaderId();

  return (
    <>
      <header id={theHeaderId}>
        <div className="container">
          <nav id="main-nav">
            {/* <img src="img/logo.png" alt="Chris" id="logo" /> */}
            <div className="logo">
              <NavLink to="/" exact>
                <h2>Chris Papastefanou</h2>
                <h3> UX | Frontend | Strategy | Awesomeness</h3>
              </NavLink>
            </div>

            <ul>
              <li>
                <NavLink to="/" activeClassName="current" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/work" activeClassName="current">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="current" exact>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-content">
            <p className="catch-phrase">
              I make Business, Technology and People enjoy each other’s company.
            </p>
            <p className="lead"></p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
