import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from '../navigation/navigation.module';
import SideBar from '../sidebar/sidebar.module';

const App = () => {
  return (
    <div className="layout">
      <Router>
        <Navigation />
        <Switch>
          <SideBar />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
