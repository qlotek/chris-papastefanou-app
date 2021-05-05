import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './main.scss';
import Header from './components/Header';
import About from './components/About';
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
            <Route path="/about" exact component={About} />
            <Route path="/work" exact component={Work} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/work/case1" exact component={Case1} />
            <Route path="/work/case2" exact component={Case2} />
            <Route path="/work/case3" exact component={Case3} />
            <Route path="/work/case4" exact component={Case4} />
            <Route path="//workcase5" exact component={Case5} />
            <Route path="/work/case6" exact component={Case6} />
            <Route path="/work/case7" exact component={Case7} />
            <Route path="/work/case8" exact component={Case8} />
            <Route path="/work/case9" exact component={Case9} />
            <Route path="/caseone" exact component={Caseone} />
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
