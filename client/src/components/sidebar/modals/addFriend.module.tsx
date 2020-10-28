import React, { useEffect, useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { contact, sidebarState } from '../../../store/sidebarSlice';

const AddFriendModal = ({ username, icon }: contact) => {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="requests">
          <div className="title">
            <h1>Add your friends</h1>
            <button
              type="button"
              className="btn"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="material-icons">close</i>
            </button>
          </div>
          <div className="content">
            <Form>
              {username ? (
                <div className="form-group">
                  <label htmlFor="user">Username:</label>
                  <Field
                    type="text"
                    className="form-control"
                    id="user"
                    placeholder="Add recipient..."
                    disabled={true}
                  />
                  <div className="user" id="contact">
                    <img
                      className="avatar-sm"
                      src={icon || '/dist/img/avatar.png'}
                      alt="avatar"
                    />
                    <h5>{username}</h5>
                  </div>
                </div>
              ) : (
                <h2 className='text-center p-5 text-danger'>Please select user first!</h2>
              )}
              <div className="form-group">
                <label htmlFor="welcome">Message:</label>
                <Field
                  as="textarea"
                  className="text-control"
                  id="welcome"
                  placeholder="Send your welcome message..."
                  name="message"
                >
                  Hi Keith, I'd like to add you as a contact.
                </Field>
              </div>
              <button type="submit" className="btn button w-100">
                Send Friend Request
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { contact }: sidebarState = state.sidebar;
  return {
    ...contact,
  };
};

export default connect(mapStateToProps)(
  withFormik({
    mapPropsToValues({ message }: any) {
      return {
        message: message || '',
      };
    },
    handleSubmit(values, { props }) {
      if(!props.username) return;
      console.log(values, props);
    },
  })(AddFriendModal),
);
