import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <header id="header-inner">
        <div className="container">
          <nav id="main-nav">
            <img src="img/logo.png" alt="My Portfolio" id="logo" />
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

export default Navigation;
