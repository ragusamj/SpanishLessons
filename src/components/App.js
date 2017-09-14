import React, { Component } from 'react';

import '../App.css';
import Home from './Home';
import Colores from './Colores';

import {BrowserRouter as Router, Route} from 'react-router-dom';

/*import Match from 'react-router/Match';
import Link from 'react-router/Link';*/

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path="/colores" component={Colores}/>
        </div>
      </Router>
    );
  }
}

export default App;
