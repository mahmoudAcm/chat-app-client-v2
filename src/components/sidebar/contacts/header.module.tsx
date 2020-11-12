import React from 'react';
import { NavLink } from 'react-router-dom';
import { searchForContacts } from './contacts.controller';

const ContactHeader = () => {
  return (
    <header>
      <div className="search">
        <form className="form-inline position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="Search for people..."
            onInput={searchForContacts}
          />
          <button type="button" className="btn btn-link loop">
            <i className="material-icons">search</i>
          </button>
        </form>
        <button
          className="btn create"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <i className="material-icons">person_add</i>
        </button>
      </div>
      <div className="list-group sort">
        <NavLink
          to="/contacts"
          className="btn filterMembersBtn"
          isActive={(match, { search }) => {
            const is = '' === search;
            return is;
          }}
          activeClassName="active show"
        >
          All
        </NavLink>
        <NavLink
          to="/contacts?filter=online"
          className="btn filterMembersBtn"
          isActive={(match, { search }) => {
            const is = '?filter=online' === search;
            return is;
          }}
          activeClassName="active show"
        >
          Online
        </NavLink>
        <NavLink
          to="/contacts?filter=offline"
          className="btn filterMembersBtn"
          isActive={(match, { search }) => {
            const is = '?filter=offline' === search;
            return is;
          }}
          activeClassName="active show"
        >
          Offline
        </NavLink>
      </div>
    </header>
  );
};

export default ContactHeader;
