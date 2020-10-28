import React from 'react';
import { contact } from '../../../store/sidebarSlice';

const Member = ({ username, icon, firstname, location }: contact) => {
  return (
    <a href="#" className="filterMembers all contact" data-toggle="list">
      <img
        className="avatar-md"
        src={icon || '/dist/img/avatar.png'}
        data-toggle="tooltip"
        data-placement="top"
        title={firstname}
        alt="avatar"
      />
      <div className="status">
        <i className="material-icons online">fiber_manual_record</i>
      </div>
      <div className="data">
        <h5>{username}</h5>
        <p>{location}</p>
      </div>
      <div className="person-add">
        <i className="material-icons">person</i>
      </div>
    </a>
  );
};

const ContactsList = ({ list }: { list: Array<contact> }) => {
  return (
    <div className="contacts">
	  <h1>Contacts</h1>
      <div className="list-group" role="tablist">
        {list.map(({ id, ...rest }) => {
          return <Member {...rest} key={id} />;
        })}
      </div>
    </div>
  );
};

export default ContactsList;
