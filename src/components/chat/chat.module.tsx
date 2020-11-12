import React, { useState } from 'react';
import ChatHeader from './header/header.module';
import ChatContent from './content/content.module';
import ChatFooter from './footer/footer.module';
import { chatState } from '../../store/chatSlice';
import { connect } from 'react-redux';

export interface chatRoomProps {
  isDisabled: boolean;
}

const ChatRoom = (props: any) => {
  const { type, isLoading, hasNext, messages, details }: chatState = props;
  const isDisabled = type === 'disconnected';
  return (
    <div className="main">
      <div className="tab-content">
        <div className="babble tab-pane active show">
          <div className="chat">
            <ChatHeader isDisabled={isDisabled} details={details} />
            <ChatContent
              isDisabled={isDisabled}
              messages={messages}
              hasNext={hasNext}
              isLoading={isLoading}
            />
            <ChatFooter isDisabled={isDisabled} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { isLoading, hasNext, type, messages, details }: chatState = state.chat;
  return {
    isLoading,
    hasNext,
    type,
    messages,
    details,
  };
};

export default connect(mapStateToProps)(ChatRoom);
