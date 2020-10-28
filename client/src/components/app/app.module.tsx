import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import { loadersState, setLoading } from '../../store/loadersSlice';
import SignIn from '../auth/signin/signin.module';
import SignUp from '../auth/signup/signup.module';
import ChatRoom from '../chat/chat.module';
import Loader, { loader } from '../loaders/loader.module';
import Navigation from '../navigation/navigation.module';
import SideBar from '../sidebar/sidebar.module';

interface roles {
  role: 'admin' | 'user' | 'visitor';
}

interface LoadComponentProps extends RouteProps, roles {
  Component?: any;
}

const LoadComponent = connect((state: any) => {
  const { isLoading }: loadersState = state.loaders;
  return { isLoading };
})(
  ({
    Component,
    role,
    isLoading,
    ...rest
  }: LoadComponentProps & loadersState) => {
    const dispatch = useDispatch();
    const { pathname } = rest.location!;

    useEffect(() => {
      const animataion = loader.current!.animate(
        [
          { width: '0%' },
          { width: '25' },
          { width: '50%' },
          { width: '75%' },
          { width: '100%' },
        ],
        {
          duration: isLoading ? 1500 : 700,
          delay: isLoading ? 500 : 0,
          endDelay: 250,
        },
      );

      /* simulating ajax requests for test */
      // setTimeout(() => {
      //   animataion.pause();
      // }, 1000);

      // setTimeout(() => {
      //   animataion.play();
      // }, 2000);

      animataion.onfinish = () => {
        dispatch(setLoading(false));
      };

      return () => {
        for (let i = 1; i < 10; i++) {
          clearTimeout(i);
        }
      };
    }, [pathname]);

    return <>{!isLoading ? <Component {...rest} /> : <></>}</>;
  },
);

const LoadComponentRoute = ({
  component: Component,
  children,
  role,
  ...rest
}: LoadComponentProps) => {
  return (
    <Route
      {...rest}
      render={(props: RouteProps) => (
        <>
          {Component ? (
            <LoadComponent {...props} Component={Component} role={role} />
          ) : (
            children
          )}
        </>
      )}
    />
  );
};

const Main = () => {
  return (
    <div className="layout">
      <Navigation />
      <SideBar />
      <ChatRoom />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Loader />
      <Switch>
        <LoadComponentRoute path="/signIn" component={SignIn} role="visitor" />
        <LoadComponentRoute path="/signUp" component={SignUp} role="visitor" />
        <LoadComponentRoute component={Main} role="user" />
      </Switch>
    </Router>
  );
};

export default App;
