import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import './main.css';
import Header from './components/Header';
import About from './components/About';
import Item from './components/Item';
import Footer from './components/Footer';

import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Case1 from './components/Cases';
import Case2 from './components/Cases';
import Case3 from './components/Cases';
import Case4 from './components/Cases';
import Case5 from './components/Cases';
import Case6 from './components/Cases';
import Case7 from './components/Cases';
import Case8 from './components/Cases';
import Case9 from './components/Cases';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Case1} />
            <Route path="/work/case1" component={Case1} />
            <Route path="/work/case2" component={Case2} />
            <Route path="/work/case3" component={Case3} />
            <Route path="/work/case4" component={Case4} />
            <Route path="/work/case5" component={Case5} />
            <Route path="/work/case6" component={Case6} />
            <Route path="/work/case7" component={Case7} />
            <Route path="/work/case8" component={Case8} />
            <Route path="/work/case9" component={Case9} />
            <Route path="/bjarb" component={Case9} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
