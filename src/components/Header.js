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
            <NavLink to="/" exact>
              <img src="img/logo.png" alt="Chris" id="logo" />
            </NavLink>
            <ul>
              <li>
                <NavLink to="/" activeClassName="current" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/work" activeClassName="current" exact>
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
        </div>
      </header>
    </>
  );
};

export default Header;
