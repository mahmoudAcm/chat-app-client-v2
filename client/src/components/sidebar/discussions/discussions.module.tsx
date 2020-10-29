import React from 'react';
import { connect } from 'react-redux';
import { sidebarState } from '../../../store/sidebarSlice';
import GetMore from '../find-more.module';
import DiscussionsList from './discussions-list.module';

const Discussions = (props: any) => {
  const { isLoading, hasNext, discussions }: sidebarState = props;
  return (
    <>
      {/* <DiscussionsHeader /> */}
      {isLoading ? <p className="text-center">loading...</p> : <></>}
      <DiscussionsList list={discussions} />
      {hasNext ? <GetMore text="Get more" click={() => {}} /> : <></>}
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
