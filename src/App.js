//React Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheets/dada.css';
import './Stylesheets/demuth_letter.css';
import './Stylesheets/tissue_paper.css';
import './Stylesheets/cacodylate_eye.css';
import './Stylesheets/blind_man.css';

//Home Page
import Index from './Home Page/Front/Home/home';
import Front from './Home Page/Front/front';
import About from './Home Page/About/about';
import Archive from './Home Page/Archive/archive';
import Clues from './Home Page/Front/Home/clues';

// Puzzles
import Demuth_Letter from './Puzzles/demuth_letter/demuth_letter';
import The_Letter from './Puzzles/the_letter/the_letter';
import Cacodylate_Eye from './Puzzles/cacodylic_eye/cacodylate_eye'
import Tissue_Paper from './Puzzles/tissue_paper/tissue_paper'
import Blind_Man from './Puzzles/blind_man/blind_man'


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
            <Route exact path='/louise_norton' component={LN_Puzzle} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;