import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './Front/Home/home';
import Front from './Front/front';
import About from './About/about';
import Archive from './Archive/archive';
import Clues from './Front/Home/clues';
import Demuth from './Puzzles/demuth_letter_puzzle/demuth_letter';
import AR_Letter from './Puzzles/ar_letter_puzzle/ar_letter';
import Cacodylate from './Puzzles/r_rose_puzzle/r_rose_part_1/cacodylate'


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/front' component={Front} />
              <Route exact path='/about' component={About} />
              <Route exact path='/archive' component={Archive} />
              <Route exact path='/clues' component={Clues} />
              <Route exact path='/letter' component={AR_Letter} />
              <Route exact path='/demuth_letter' component={Demuth} />
              <Route exact path='/cacodylate' component={Cacodylate} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;