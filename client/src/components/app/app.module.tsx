import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import SignIn from '../auth/signin/signin.module';
import SignUp from '../auth/signup/signup.module';
import ChatRoom from '../chat/chat.module';
import Navigation from '../navigation/navigation.module';
import SideBar from '../sidebar/sidebar.module';

interface LoadComponentProps extends RouteProps {
  Component: any;
}

const LoadComponent = ({ Component, ...rest }: LoadComponentProps) => {
  useEffect(() => {
    console.log(rest.location?.pathname);
  }, [rest.location?.pathname]);
  return <Component {...rest} />;
};

const LoadComponentRoute = ({
  component: Component,
  children,
  ...rest
}: RouteProps) => {
  return (
    <Route
      {...rest}
      render={(props: RouteProps) => (
        <>
          {Component ? (
            <LoadComponent {...props} Component={Component} />
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
      <Switch>
        <LoadComponentRoute path="/signIn" component={SignIn} />
        <LoadComponentRoute path="/signUp" component={SignUp} />
        <LoadComponentRoute component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
