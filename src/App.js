import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './main.scss';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Work from './components/Work';
import Resume from './components/Resume';
import Printresume from './components/Printresume';
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
import Cases from './components/Cases';

function App() {
  const pathname = window.location.pathname; //returns the current url minus the domain name
  console.log('pathname: ' + pathname);
  let addedClass = '';
  if (pathname === '/printresume') {
    addedClass = 'print';
  } else addedClass = '';
  console.log('addedClass: ' + addedClass);
  return (
    <div className={'App ' + addedClass}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/printresume" component={Printresume} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/work/case1" component={Case1} />
            <Route exact path="/work/case2" component={Case2} />
            <Route exact path="/work/case3" component={Case3} />
            <Route exact path="/work/case4" component={Case4} />
            <Route exact path="/work/case5" component={Case5} />
            <Route exact path="/work/case6" component={Case6} />
            <Route exact path="/work/case7" component={Case7} />
            <Route exact path="/work/case8" component={Case8} />
            <Route exact path="/work/case9" component={Case9} />
            <Route exact path="/cases" component={Cases} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
