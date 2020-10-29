import React from 'react';
import { NavLink } from 'react-router-dom';

const DiscussionsHeader = () => {
  return (
    <header>
      <div className="list-group sort">
        <NavLink
          to="/discussions"
          className="btn filterDiscussionsBtn"
          isActive={(match, { search }) => {
            const is = '' === search;
            return is;
          }}
          activeClassName="active show"
        >
          All
        </NavLink>
      </div>
    </header>
  );
};

export default DiscussionsHeader;
