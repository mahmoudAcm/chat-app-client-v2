import React from 'react';
import { ChatRoomProps } from '../chat.module';

const Footer = ({ isDisabled }: ChatRoomProps) => {
  const disabledClass = isDisabled ? 'disabled' : '';

  const placeholder = !isDisabled
    ? 'Start typing for reply...'
    : 'Messaging unavailable';

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
            ></textarea>
            <button
              className={`btn emoticons ${disabledClass}`}
              disabled={isDisabled}
            >
              <i className="material-icons">insert_emoticon</i>
            </button>
            <button
              type="submit"
              className={`btn send ${disabledClass}`}
              disabled={isDisabled}
            >
              <i className="material-icons">send</i>
            </button>
          </form>
          <label>
            <input type="file" disabled={isDisabled} />
            <span className={`btn attach d-sm-block d-none ${disabledClass}`}>
              <i className="material-icons">attach_file</i>
            </span>
          </label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
