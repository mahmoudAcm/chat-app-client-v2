import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChatRoom from '../chat/chat.module';
import Navigation from '../navigation/navigation.module';
import SideBar from '../sidebar/sidebar.module';

const App = () => {
  return (
    <div className="layout">
      <Router>
        <Navigation />
        <Switch>
          <Route>
            <SideBar />
            <ChatRoom />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
