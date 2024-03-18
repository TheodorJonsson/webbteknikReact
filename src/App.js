import logo from './logo.svg';
import './styles/tegspizzeria.css'
//Importing all the pages
import Home from './pages/home';
import Menu from './pages/menu'
import Review from './pages/review';
import Gallery from './pages/gallery';
import Contact from './pages/contact';

import Header from './components/header';
import Footer from './components/footer';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/home"Component={Home} />
          <Route path="/menu"Component={Menu} />
          <Route path="/gallery"Component={Gallery} />
          <Route path="/review"Component={Review} />
          <Route path="/contact"Component={Contact} />
  
        </Routes>
      <Footer />
      </Router>

    </div>

  );
}

export default App;

