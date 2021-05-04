import './main.css';
import Header from './components/Header';
import Item from './components/Item';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header navLocation="work" />
      <div className="items">
        <Item number="1" category="UI/UX Design" title="Logistics" />
        <Item />
        Berban
      </div>
      <Footer />
    </div>
  );
}

export default App;
