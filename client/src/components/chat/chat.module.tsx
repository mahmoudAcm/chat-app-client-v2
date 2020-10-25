import React, { useState } from 'react';
import ChatHeader from './header/header.module';
import ChatContent from './content/content.module';
import ChatFooter from './footer/footer.module';

export interface ChatRoomProps {
  isDisabled: boolean;
  relationType?: 'connected' | 'disconnected';
}

const ChatRoom = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className="main">
      <div className="tab-content">
        <div className="babble tab-pane active show">
          <div className="chat">
            <ChatHeader isDisabled={isDisabled} />
            <ChatContent isDisabled={isDisabled} />
            <ChatFooter isDisabled={isDisabled} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
