import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './animate.css';
import './App.css';
import './responsive.css';

import Home from './containers/Home';
import PortFolio from './containers/PortFolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={PortFolio} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
