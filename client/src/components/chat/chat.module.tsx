import React from 'react';
import ChatHeader from './header/header.module';
import ChatContent from './content/content.module';
import ChatFooter from './footer/footer.module';

const ChatRoom = () => {
  return (
    <div className="main">
      <div className="tab-content">
        <div className="babble tab-pane active show">
          <div className="chat">
            <ChatHeader />
            <ChatContent />
            <ChatFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
