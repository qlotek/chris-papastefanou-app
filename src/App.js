import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
