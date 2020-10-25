import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../auth/signin/signin.module';
import SignUp from '../auth/signup/signup.module';
import ChatRoom from '../chat/chat.module';
import Navigation from '../navigation/navigation.module';
import SideBar from '../sidebar/sidebar.module';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route>
          <div className="layout">
            <Navigation />
            <SideBar />
            <ChatRoom />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
