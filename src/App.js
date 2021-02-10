//React Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

//CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheets/dada.css';
import './Stylesheets/letter.css';
import './Stylesheets/clues.css';
import './Stylesheets/demuth_letter.css';
import './Stylesheets/tissue_paper.css';
import './Stylesheets/blind_man.css';
import './Stylesheets/mott_catalog.css';
import './Stylesheets/sia_catalog.css';
import './Stylesheets/god.css';
import './Stylesheets/phonebook.css';
import './Stylesheets/elsa.css';
import './Stylesheets/rrose.css';
import './Stylesheets/godII.css';
import './Stylesheets/corkboard.css';

//Home Page
import Home from './Home Page/Front/Home/home';
import Intro from './Home Page/Front/Home/introPage';
import Outro from './Home Page/Front/Home/outroPage';
import Front from './Home Page/Front/front';
import About from './Home Page/About/about';
import Archive from './Home Page/Archive/archive';
import Clues from './Home Page/Front/Home/clues';
import CorkBoard from './Corkboard/corkboard';

// Puzzles
import The_Letter from './Puzzles/the_letter/the_letter';
import Demuth_Letter from './Puzzles/demuth_letter/demuth_letter';
import Sia_Catalog from './Puzzles/sia_puzzle/sia_catalog'
import Phonebook from './Puzzles/phone_book_puzzle/phonebook'
import Tissue_Paper from './Puzzles/tissue_paper/tissue_paper'
import Blind_Man from './Puzzles/blind_man/blind_man'
import Rrose from './Puzzles/rrose/rrose'
import Mina_Loy from './Puzzles/mina_loy_puzzle/mina_loy.js'
import Elsa from './Puzzles/elsa_puzzle/elsa'
import Mott_Catalog from './Puzzles/mott_catalog/mott_catalog'
import God from './Puzzles/god_puzzle/god'
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
            <Route exact path='/intro' component={Intro} />
            <Route exact path='/outro' component={Outro} />
            <Route exact path='/clues' component={Clues} />
            <Route exact path='/evidence-board' component={CorkBoard} />

            {/* Puzzles */}
            <Route exact path='/the-letter' component={The_Letter} />
            <Route exact path='/the-other-letter' component={Demuth_Letter} />
            <Route exact path='/independent' component={Sia_Catalog} />
            <Route exact path='/what-rings' component={Phonebook} />
            <Route exact path='/who-remains' component={Tissue_Paper} />
            <Route exact path='/blind-man' component={Blind_Man} />
            <Route exact path='/rrose' component={Rrose} />
            <Route exact path='/friend-of-louise' component={Mina_Loy} />
            <Route exact path='/the-future' component={Elsa} />
            <Route exact path='/plumb-the-depths' component={Mott_Catalog} />
            <Route exact path='/god-or-goddess' component={God} />
            <Route exact path='/his-or-hers' component={GodII} />
          </Switch>
        </Router>
      </CookiesProvider>
    );
  }
}

export default App;