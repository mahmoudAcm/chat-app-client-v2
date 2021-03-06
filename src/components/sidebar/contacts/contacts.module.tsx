import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import { sidebarState } from '../../../store/sidebarSlice';
import GetMore from '../../loadMoreData.module';
import ContactsList from './contacts-list.module';
import ContactHeader from './header.module';

const Contacts = (props: any) => {
  const {
    contacts,
    isLoading,
    hasNext,
    location: { search },
  }: sidebarState & RouteComponentProps = props;
  const query = queryString.parse(search);
  const message =
    'nothing to show, please search for people to add as a contact';
  useEffect(() => {
    // fetch data
  }, []);

  return (
    <>
      <ContactHeader />
      {isLoading.contact ? (
        <p className="text-center">loading...</p>
      ) : (
        <>
          {contacts.length === 0 ? (
            <p className="text-center"> {message} </p>
          ) : (
            <>
              <ContactsList list={contacts} filter={query.filter} />
              {hasNext.contact ? (
                <GetMore text="find more" request={async () => {}} />
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  const { contacts, isLoading, hasNext }: sidebarState = state.sidebar;
  return {
    contacts,
    isLoading,
    hasNext,
  };
};

export default connect(mapStateToProps)(Contacts);
