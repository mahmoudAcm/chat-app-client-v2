import React from 'react';
import { contact } from '../../../store/sidebarSlice';
import { selectMember } from './contacts.controller';

const Member = ({ username, icon, firstname, location, data, online }: contact) => {
  return (
    <a
      href="#"
      className="filterMembers contact"
      data-toggle="list"
      onClick={selectMember(data!)}
    >
      <img
        className="avatar-md"
        src={icon || '/dist/img/avatar.png'}
        data-toggle="tooltip"
        data-placement="top"
        title={firstname}
        alt="avatar"
      />
      <div className="status">
        <i className={`material-icons ${online? "online" : "offline"}`}>fiber_manual_record</i>
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

const ContactsList = ({ list, filter }: { list: Array<contact>, filter: any }) => {
  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <div className="list-group" role="tablist">
        {list.filter(({online}) => {
	       if(!filter) return true;
		   if(filter === "online" && online) return true;	
		   if(filter === "offline" && !online) return true;	
		   return false;
		}).map(({ id, ...rest }) => {
          return <Member {...rest} key={id} data={rest} />;
        })}
      </div>
    </div>
  );
};

export default ContactsList;
