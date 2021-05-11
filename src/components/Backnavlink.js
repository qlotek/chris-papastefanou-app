import React from 'react';
import { NavLink } from 'react-router-dom';

const Backnavlink = (props) => {
  return (
    <div className="back-nav-link">
      <NavLink to="/work">
        <i class="fas fa-arrow-left"></i> {props.title}
      </NavLink>
    </div>
  );
};

export default Backnavlink;
