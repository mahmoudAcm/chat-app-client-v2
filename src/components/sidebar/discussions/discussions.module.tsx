import React from 'react';
import { connect } from 'react-redux';
import { sidebarState } from '../../../store/sidebarSlice';
import GetMore from '../../loadMoreData.module';
import DiscussionsList from './discussions-list.module';

const Discussions = (props: any) => {
  const { isLoading, hasNext, discussions }: sidebarState = props;
  const message =
    'their is no discussions for now please search for people to start discussions';
  return (
    <>
      {isLoading.discussion ? (
        <p className="text-center">loading...</p>
      ) : (
        <>
          {discussions.length == 0 ? (
            <p className="text-center"> {message} </p>
          ) : (
            <>
              <DiscussionsList list={discussions} />
              {hasNext.discussion ? (
                <GetMore text="Get more" request={async () => {}} />
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
  const { isLoading, hasNext, discussions }: sidebarState = state.sidebar;
  return {
    isLoading,
    hasNext,
    discussions,
  };
};

export default connect(mapStateToProps)(Discussions);
