import React from 'react';
import { chatState } from '../../../store/chatSlice';
import { chatRoomProps } from '../chat.module';

const Header = (props: any) => {
  const { isDisabled, details }: chatRoomProps & chatState = props;
  const { firstname, icon, username, online } = details!;
  const disabledClass = isDisabled ? 'disabled' : '';
  return (
    <header className="top">
      <div className="container">
        <div className="col-md-12">
          <div className="inside">
            <a href="#">
              <img
                className="avatar-md"
                src={icon || '/dist/img/avatar.png'}
                data-toggle="tooltip"
                data-placement="top"
                title={firstname}
                alt="avatar"
              />
            </a>
            <div className="status">
              <i className={`material-icons ${online ? 'online' : 'offline'}`}>
                fiber_manual_record
              </i>
            </div>
            <div className="data">
              <h5>
                <a href="#">{username}</a>
              </h5>
              <span>{online ? 'Active now' : 'Inactive'}</span>
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
