import React, { useEffect, useState } from 'react';
import { splitArrayIntoIntervals } from '../../../helpers/loadArray';
import { contact } from '../../../store/sidebarSlice';
import { selectMember } from './contacts.controller';

const Member = ({
  username,
  icon,
  firstname,
  location,
  data,
  online,
}: contact) => {
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
        <i className={`material-icons ${online ? 'online' : 'offline'}`}>
          fiber_manual_record
        </i>
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

const ContactsList = ({
  list,
  filter,
}: {
  list: Array<contact>;
  filter: any;
}) => {
  const [members, setMembers] = useState<typeof list>([]);
  let interval: any = null;

  useEffect(() => {
    interval = splitArrayIntoIntervals(
      list,
      setMembers,
      10,
      700,
      ({ online }: contact) => {
        if (!filter) return true;
        if (online && filter === 'online') return true;
        if (!online && filter === 'offline') return true;
        return false;
      },
    );
    return () => {
      clearInterval(interval);
      setMembers([]);
    };
  }, [filter]);

  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <div className="list-group" role="tablist">
        {members.map(({ id, ...rest }) => {
          return <Member {...rest} data={rest} key={id} />;
        })}
      </div>
    </div>
  );
};

export default ContactsList;
