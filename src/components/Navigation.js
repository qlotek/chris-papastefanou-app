import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>

      <header id="header-inner">
        <div className="container">
          <nav id="main-nav">
            <img src="img/logo.png" alt="My Portfolio" id="logo" />
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/work">Work</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
