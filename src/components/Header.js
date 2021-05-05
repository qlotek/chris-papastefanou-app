import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header id="header-inner">
        <div className="container">
          <nav id="main-nav">
            <NavLink to="/" activeClassName="current">
              <img src="img/logo.png" alt="Chris" id="logo" />
            </NavLink>
            <ul>
              <li>
                <NavLink to="/" activeClassName="current">
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/about">About</NavLink>
              </li> */}
              <li>
                <NavLink to="/work" activeClassName="current">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="current">
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
