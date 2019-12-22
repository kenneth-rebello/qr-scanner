import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Scanner from './components/Scanner';
import Home from './components/Home';
import Generator from './components/Generator';

const App = () => {

  return (
    <Router basename="/">
      <div>
        <ul>
          <li><Link to="/scanner">QR Scanner</Link></li>
          <li><Link to="/generator">QR Generator</Link></li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route exact path="/scanner" component={Scanner}/>
        <Route exact path="/generator" component={Generator}/>
      </div>
    </Router>
  );
}

export default App;
