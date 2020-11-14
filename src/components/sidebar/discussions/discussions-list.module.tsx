import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { discussion } from '../../../store/sidebarSlice';
import { getElapsedTime } from '../../../helpers/date';
import { mapSecondsToString } from './discussions.controller';

interface discussionTypeProps {
  type: 'disconnected' | 'connected';
}

const DiscussionType = ({ type }: discussionTypeProps) => {
  if (type === 'connected') return <></>;
  return (
    <div className={`new ${type === 'disconnected' ? 'bg-gray' : ''}`}>
      {type === 'disconnected' ? <span>?</span> : <></>}
    </div>
  );
};

const Discussion = ({
  type,
  firstname,
  username,
  message,
  updatedAt,
  icon,
  room,
}: discussion) => {
  const [elapsed, setElapsed] = useState<string>();
  useEffect(() => {
    const interval = setInterval(() => {
      const time = getElapsedTime(updatedAt!);
      setElapsed(mapSecondsToString(time, updatedAt));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <NavLink
      to={`/discussions/${room}`}
      className="filterDiscussions single"
      activeClassName="active"
      id="list-chat-list"
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
        <i className="material-icons online">fiber_manual_record</i>
      </div>
      <DiscussionType type={type} />
      <div className="data">
        <h5>{username}</h5>
        <span>
          {elapsed || mapSecondsToString(getElapsedTime(updatedAt!), updatedAt)}
        </span>
        <p>{message}</p>
      </div>
    </NavLink>
  );
};

const DiscussionsList = ({ list }: { list: Array<discussion> }) => {
  return (
    <div className="discussions">
      <h1>Discussions</h1>
      <div className="list-group" id="chats" role="tablist">
        {list.map(({ id, ...rest }) => (
          <Discussion {...rest} key={id} />
        ))}
      </div>
    </div>
  );
};

export default DiscussionsList;
