import React from 'react';
import { chatState } from '../../../store/chatSlice';
import { chatRoomProps } from '../chat.module';

const Content = ({
  messages,
  isLoading,
  hasNext,
}: chatRoomProps & chatState) => {
  return (
    <div className="content">
      <div className="container">
        <div className="col-md-12"></div>
      </div>
    </div>
  );
};

export default Content;
