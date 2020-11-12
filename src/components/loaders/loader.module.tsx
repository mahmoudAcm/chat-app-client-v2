import React, { createRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { loadersState } from '../../store/loadersSlice';

import './loader.styles.css';

export const loader = createRef<HTMLDivElement>();

const Loader = ({}: loadersState) => {
  return <div className="loader__element" ref={loader}></div>;
};

const mapStateToProps = (state: any) => {
  const loaders: loadersState = state.loaders;
  return {
    isLoading: loaders.isLoading,
  };
};

export default connect(mapStateToProps)(Loader);
