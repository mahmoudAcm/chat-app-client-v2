import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from '../navigation/navigation.module';


const App = () => {
    return (
        <div className="layout">
            <Router>
                <Navigation />
            </Router>
        </div>
    );
};

export default App;