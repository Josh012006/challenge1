import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
