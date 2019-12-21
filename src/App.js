import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Scanner from './components/Scanner';
import Home from './components/Home';

const App = () => {

  return (
    <Router basename="/">
      <div>
        <ul>
          <li><Link to="/scanner">Open Scanner</Link></li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route exact path="/scanner" component={Scanner}/>
      </div>
    </Router>
  );
}

export default App;
