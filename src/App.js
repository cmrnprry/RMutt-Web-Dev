//React Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

//CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheets/dada.css';
import './Stylesheets/clues.css';
import './Stylesheets/demuth_letter.css';
import './Stylesheets/tissue_paper.css';
import './Stylesheets/cacodylate_eye.css';
import './Stylesheets/blind_man.css';
import './Stylesheets/mott_catalog.css';
import './Stylesheets/sia_catalog.css';
import './Stylesheets/god.css';
import './Stylesheets/phonebook.css';
import './Stylesheets/elsa.css';
import './Stylesheets/godII.css';

//Home Page
import Home from './Home Page/Front/Home/home';
import Front from './Home Page/Front/front';
import About from './Home Page/About/about';
import Archive from './Home Page/Archive/archive';
import Clues from './Home Page/Front/Home/clues';

// Puzzles
import Demuth_Letter from './Puzzles/demuth_letter/demuth_letter';
import The_Letter from './Puzzles/the_letter/the_letter';
import Cacodylate_Eye from './Puzzles/cacodylic_eye/cacodylate_eye'
import Rrose from './Puzzles/cacodylic_eye/rrose'
import Tissue_Paper from './Puzzles/tissue_paper/tissue_paper'
import Blind_Man from './Puzzles/blind_man/blind_man'
import Mott_Catalog from './Puzzles/mott_catalog/mott_catalog'
import Sia_Catalog from './Puzzles/sia_puzzle/sia_catalog'
import God from './Puzzles/god_puzzle/god'
import Phonebook from './Puzzles/phone_book_puzzle/phonebook'
import Elsa from './Puzzles/elsa_puzzle/elsa'
import GodII from './Puzzles/godII/godII'


class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Router>
          <Switch>
            {/* Home Page  */}
            <Route exact path='/' component={Home} />
            <Route exact path='/front' component={Front} />
            <Route exact path='/about' component={About} />
            <Route exact path='/archive' component={Archive} />
            <Route exact path='/clues' component={Clues} />

            {/* Puzzles */}
            <Route exact path='/the-letter' component={The_Letter} />
            <Route exact path='/demuth-letter' component={Demuth_Letter} />
            <Route exact path='/cacodylate-eye' component={Cacodylate_Eye} />
            <Route exact path='/rrose' component={Rrose} />
            <Route exact path='/tissue-paper' component={Tissue_Paper} />
            <Route exact path='/blind-man' component={Blind_Man} />
            <Route exact path='/mott-catalog' component={Mott_Catalog} />
            <Route exact path='/sia-catalog' component={Sia_Catalog} />
            <Route exact path='/god' component={God} />
            <Route exact path='/phonebook' component={Phonebook} />
            <Route exact path='/elsa' component={Elsa} />
            <Route exact path='/godII' component={GodII} />
          </Switch>
        </Router>
      </CookiesProvider>
    );
  }
}

export default App;