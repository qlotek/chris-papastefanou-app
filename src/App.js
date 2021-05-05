import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import './main.scss';
import Header from './components/Header';
import About from './components/About';
import Item from './components/Item';
import Footer from './components/Footer';

import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Error from './components/Error';
import Case1 from './components/Case1';
import Case2 from './components/Case2';
import Case3 from './components/Case3';
import Case4 from './components/Case4';
import Case5 from './components/Case5';
import Case6 from './components/Case6';
import Case7 from './components/Case7';
import Case8 from './components/Case8';
import Case9 from './components/Case9';
import Berban from './components/Berban';
import Caseone from './components/Caseone';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            <Route path="/case1" component={Case1} />
            <Route path="/case2" component={Case2} />
            <Route path="/case3" component={Case3} />
            <Route path="/case4" component={Case4} />
            <Route path="/case5" component={Case5} />
            <Route path="/case6" component={Case6} />
            <Route path="/case7" component={Case7} />
            <Route path="/case8" component={Case8} />
            <Route path="/case9" component={Case9} />
            <Route path="/caseone" component={Caseone} />
            <Route path="/bjarb" component={Contact} />
            <Route path="/yrb/berban" component={Berban} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
