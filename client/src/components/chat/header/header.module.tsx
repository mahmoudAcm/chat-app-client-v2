import React from 'react';
import { ChatRoomProps } from '../chat.module';

const Header = ({ isDisabled }: ChatRoomProps) => {
  const disabledClass = isDisabled ? 'disabled' : '';
  return (
    <header className="top">
      <div className="container">
        <div className="col-md-12">
          <div className="inside">
            <a href="#">
              <img
                className="avatar-md"
                src="dist/img/avatars/avatar-female-5.jpg"
                data-toggle="tooltip"
                data-placement="top"
                title="Keith"
                alt="avatar"
              />
            </a>
            <div className="status">
              <i className="material-icons online">fiber_manual_record</i>
            </div>
            <div className="data">
              <h5>
                <a href="#">Keith Morris</a>
              </h5>
              <span>Active now</span>
            </div>
            <button
              className={`btn d-md-block d-none ${disabledClass}`}
              disabled={isDisabled}
            >
              <i className="material-icons md-30">info</i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
