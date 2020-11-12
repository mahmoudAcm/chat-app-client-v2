import React, { createRef, useEffect, useState } from 'react';
import { chatRoomProps } from '../chat.module';
import Emoji, { emojiElement } from './emojiPicker';

export const chatInput = createRef<HTMLTextAreaElement>();

const Footer = ({ isDisabled }: chatRoomProps) => {
  const disabledClass = isDisabled ? 'disabled' : '';

  const placeholder = !isDisabled
    ? 'Start typing for reply...'
    : 'Messaging unavailable';

  const [target, setTarget] = useState<HTMLTextAreaElement>();

  useEffect(() => {
    if (chatInput.current) setTarget(chatInput.current);
  }, [chatInput]);

  return (
    <footer className="container">
      <div className="col-md-12">
        <div className="bottom">
          <form className="position-relative w-100">
            <textarea
              className="form-control"
              placeholder={placeholder}
              rows={1}
              disabled={isDisabled}
              required
              onFocus={(e: any) => {
                setTarget(e.target);
              }}
              ref={chatInput}
            ></textarea>
            <button
              type="button"
              className={`btn emoticons ${disabledClass}`}
              disabled={isDisabled}
              onClick={() => {
                emojiElement.current!.classList.toggle('fade');
              }}
            >
              <i className="material-icons">insert_emoticon</i>
            </button>
            <Emoji target={target!} />
            <button
              type="submit"
              className={`btn send ${disabledClass}`}
              disabled={isDisabled}
            >
              <i className="material-icons">send</i>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
