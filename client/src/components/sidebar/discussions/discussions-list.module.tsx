import React, { useEffect, useState } from 'react';
import { splitArrayIntoIntervals } from '../../../helpers/loadArray';
import { discussion } from '../../../store/sidebarSlice';

interface discussionTypeProps {
  type: 'disconnected' | 'connected';
}

const DiscussionType = ({ type }: discussionTypeProps) => {
  if(type === "connected") return <></>;
  return (
    <div className={`new ${type === 'disconnected' ? 'bg-gray' : ''}`}>
      {type === 'disconnected' ? <span>?</span> : <></>}
    </div>
  );
};

const Discussion = ({ type }: discussion) => {
  return (
    <a
      href="#"
      className="filterDiscussions single"
      id="list-chat-list"
      data-toggle="list"
      role="tab"
    >
      <img
        className="avatar-md"
        src="/dist/img/avatar.png"
        data-toggle="tooltip"
        data-placement="top"
        title="Janette"
        alt="avatar"
      />
      <div className="status">
        <i className="material-icons online">fiber_manual_record</i>
      </div>
      <DiscussionType type={type} />
      <div className="data">
        <h5>Janette Dalton</h5>
        <span>Mon</span>
        <p>A new feature has been updated to your account. Check it out...</p>
      </div>
    </a>
  );
};

const DiscussionsList = ({ list }: { list: Array<discussion> }) => {
  const [chats, setChats] = useState<typeof list>([]);
  let interval: any = null;
  useEffect(() => {
    interval = splitArrayIntoIntervals(list, setChats, 20, 400);
    return () => {
       clearInterval(interval);
       setChats([]);
    }
  }, []);

  return (
    <div className="discussions">
      <h1>Discussions</h1>
      <div className="list-group" id="chats" role="tablist">
        {
          chats.map(({...rest}) => <Discussion {...rest}/>)
        }
      </div>
    </div>
  );
};

export default DiscussionsList;
